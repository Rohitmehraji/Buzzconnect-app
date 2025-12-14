// pages/api/register.js
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === 'SUPPLIER') {
      const { user } = await prisma.$transaction(async (prisma) => {
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role: 'SUPPLIER',
          },
        });

        await prisma.supplierProfile.create({
          data: {
            userId: user.id,
            companyName: `${name}'s Company`, // Default company name
            address: '',
            contactDetails: '',
          },
        });
        return { user };
      });
      return res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } else {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'BUYER',
        },
      });
      return res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
