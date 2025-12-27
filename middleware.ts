// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-super-secret-jwt-key');

// Define protected routes and the roles required to access them
const protectedRoutes = {
  '/api/admin/': ['ADMIN'],
  '/api/supplier/': ['SUPPLIER'],
  '/api/buyer/': ['BUYER', 'SUPPLIER', 'ADMIN'], // Example: all roles can be buyers
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  // Check if the route is protected
  const isProtectedRoute = Object.keys(protectedRoutes).some(path => req.nextUrl.pathname.startsWith(path));

  if (isProtectedRoute) {
    if (!token) {
      return new NextResponse(
        JSON.stringify({ message: 'Authentication required' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      const userRole = payload.role as string;
      const requiredRoles = Object.entries(protectedRoutes).find(([path]) => req.nextUrl.pathname.startsWith(path))?.[1];

      if (!requiredRoles || !requiredRoles.includes(userRole)) {
        return new NextResponse(
          JSON.stringify({ message: 'Forbidden' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }

    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid token' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*', // Apply middleware to all API routes
};
