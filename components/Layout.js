// components/Layout.js
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      window.location.href = '/';
    }
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link href="/">
            <strong>BizConnect</strong> {/* your own brand name */}
          </Link>
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {user?.role === 'SELLER' && (
            <Link href="/sellers/dashboard">Seller Dashboard</Link>
          )}
          {!user && (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
          {user && (
            <>
              <span style={{ marginLeft: 10, fontSize: 13 }}>
                Hi, {user.name} ({user.role.toLowerCase()})
              </span>
              <button
                className="btn-secondary"
                style={{ marginLeft: 10 }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
