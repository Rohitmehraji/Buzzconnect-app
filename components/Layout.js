// components/Layout.js
import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title = 'BizzConnect' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header style={{ borderBottom: '1px solid #eee', padding: '16px 0' }}>
        <div className="container">
          <h1 style={{ margin: 0 }}>BizzConnect</h1>
        </div>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer style={{ borderTop: '1px solid #eee', padding: '16px 0', marginTop: '40px' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} BizzConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
