// pages/api/register.js
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    email,
    password,
    role,
    // Supplier specific fields
    companyName,
    address,
    contactPhone,
    businessCategory,
  } = req.body;

  // Basic validation
  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  if (role === 'SUPPLIER' && (!companyName || !address || !contactPhone || !businessCategory)) {
    return res.status(400).json({ error: 'Missing required supplier fields' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role === 'SUPPLIER' ? 'SUPPLIER' : 'BUYER',
      },
    });

    if (role === 'SUPPLIER') {
      await prisma.supplierProfile.create({
        data: {
          userId: user.id,
          companyName,
          address,
          contactPhone,
          businessCategory,
          serviceAreas: [], // Default to empty arrays
          certifications: [],
        },
      });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.setHeader(
      'Set-Cookie',
      serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      })
    );

    const { password: _, ...userWithoutPassword } = user;
    return res.status(201).json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
