import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}
const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_NAME = 'auth_token';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const createToken = (user) => {
  return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '30d',
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const setTokenCookie = (res, token) => {
  const cookie = serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
};

export const clearTokenCookie = (res) => {
  const cookie = serialize(TOKEN_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
};

import prisma from './prisma';

export const getAuthenticatedUser = async (req) => {
  const token = req.cookies[TOKEN_NAME];

  if (!token) {
    return null;
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
  });

  return user;
};
