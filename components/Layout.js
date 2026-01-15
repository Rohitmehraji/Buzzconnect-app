// components/Layout.js
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <nav className="navbar">
        <div>
          <Link href="/">
            <strong>BizzConnect</strong>
          </Link>
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {user?.role === 'SUPPLIER' && (
            <Link href="/supplier/dashboard">Supplier Dashboard</Link>
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
