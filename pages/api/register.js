// pages/api/register.js
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

const secretKey = new TextEncoder().encode(JWT_SECRET);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const allowedRoles = ['BUYER', 'SUPPLIER'];
    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({ error: 'Invalid role specified' });
    }

    const userRole = role === 'SUPPLIER' ? 'SUPPLIER' : 'BUYER';

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: userRole,
      },
    });

    // Create JWT
    const token = await new SignJWT({ userId: user.id, email: user.email, role: user.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1d') // Token valid for 1 day
      .sign(secretKey);

    // Set cookie
    const cookie = serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    res.setHeader('Set-Cookie', cookie);

    // Respond with user data (excluding password)
    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (e) {
    console.error('Registration error:', e);
    return res.status(500).json({ error: 'An unexpected error occurred during registration' });
  }
}
