import { PrismaClient } from '@prisma/client';

// Declare a global variable to hold the Prisma Client instance.
// This is done to prevent creating new connections to the database with every hot reload in development.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
