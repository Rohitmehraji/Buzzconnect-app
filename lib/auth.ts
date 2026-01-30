// lib/auth.ts
import { NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';
import prisma from './prisma';

interface JwtPayload {
  userId: number;
  role: string;
}

export const getUserFromRequest = async (req: NextApiRequest) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
