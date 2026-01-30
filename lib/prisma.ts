// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Declare a global variable to hold the Prisma Client instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
// In development, Next.js clears the Node.js cache on every reload,
// which would create a new PrismaClient instance each time.
// To prevent this, we store the instance on the global object.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;
