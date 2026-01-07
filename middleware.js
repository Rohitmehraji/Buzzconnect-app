// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

const secretKey = new TextEncoder().encode(JWT_SECRET);

// 1. Specify protected routes
const adminRoutes = ['/admin'];
const supplierRoutes = ['/supplier'];
const buyerRoutes = ['/buyer'];

const isProtected = (routes, pathname) => routes.some((route) => pathname.startsWith(route));

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const token = req.cookies.get('auth_token')?.value;

  let payload;
  let error;

  if (token) {
    try {
      const { payload: verifiedPayload } = await jwtVerify(token, secretKey, {
        algorithms: ['HS256'],
      });
      payload = verifiedPayload;
    } catch (e) {
      console.error('JWT Verification Error:', e.message);
      error = 'Token is invalid or expired.';
    }
  }

  // Handle API routes separately if needed
  if (pathname.startsWith('/api/')) {
    // Add API route protection logic here if needed, e.g., for POST/PUT/DELETE
    return NextResponse.next();
  }

  // Redirect authenticated users from auth pages (login/register) to a dashboard
  if (payload && (pathname.startsWith('/login') || pathname.startsWith('/register'))) {
    return NextResponse.redirect(`${origin}/`);
  }

  // If no token and trying to access a protected route, redirect to login
  if (!payload && (isProtected(adminRoutes, pathname) || isProtected(supplierRoutes, pathname) || isProtected(buyerRoutes, pathname))) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.search = `redirect=${pathname}`;
    return NextResponse.redirect(url);
  }

  // Role-based access control
  if (payload) {
    const { role } = payload;
    if (isProtected(adminRoutes, pathname) && role !== 'ADMIN') {
      return NextResponse.redirect(`${origin}/unauthorized`);
    }
    if (isProtected(supplierRoutes, pathname) && role !== 'SUPPLIER') {
      return NextResponse.redirect(`${origin}/unauthorized`);
    }
    if (isProtected(buyerRoutes, pathname) && role !== 'BUYER') {
      return NextResponse.redirect(`${origin}/unauthorized`);
    }
  }

  // If there was a token error, you might want to clear the cookie and redirect
  if (error) {
    const response = NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(error)}`);
    response.cookies.delete('auth_token');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except for static files and _next
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
