// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/auth';

const protectedRoutes = {
  '/admin': ['ADMIN'],
  '/supplier': ['SUPPLIER', 'ADMIN'],
  '/buyer': ['BUYER', 'ADMIN'],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get('auth_token')?.value;

  const session = authToken ? await decrypt(authToken) : null;

  // Find a matching protected route
  const protectedPath = Object.keys(protectedRoutes).find((path) =>
    pathname.startsWith(path)
  );

  if (protectedPath) {
    if (!session) {
      // Not authenticated, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }

    const requiredRoles = protectedRoutes[protectedPath];
    if (!requiredRoles.includes(session.role)) {
      // Role not authorized, redirect to a generic unauthorized page or home
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/supplier/:path*', '/buyer/:path*'],
};
