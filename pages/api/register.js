// pages/api/register.js
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'An account with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === 'SUPPLIER') {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'SUPPLIER',
          supplierProfile: {
            create: {
              companyName: `${name}'s Company`, // Placeholder
              address: '', // To be filled by supplier
              contactNumber: '', // To be filled by supplier
            },
          },
        },
        include: {
          supplierProfile: true,
        },
      });
      const { password, ...userWithoutPassword } = user;
      return res.status(201).json({ user: userWithoutPassword });
    } else {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'BUYER',
        },
      });
      const { password, ...userWithoutPassword } = user;
      return res.status(201).json({ user: userWithoutPassword });
    }
  } catch (e) {
    console.error('Registration error:', e);
    return res.status(500).json({ error: 'An internal server error occurred' });
  }
}
