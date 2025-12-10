// pages/api/register.js
import prisma from '../../lib/prisma';


export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // NOTE: Password is stored as plain text here – OK for demo only.
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: role === 'SELLER' ? 'SELLER' : 'BUYER',
      },
    });

    return res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
