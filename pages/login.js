// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Invalid credentials');
    } else {
      // The user data is now available in the response, but we'll
      // rely on the http-only cookie for session management.
      // We can use the user role from the response for redirection.
      if (data.user.role === 'SUPPLIER') {
        router.push('/supplier/dashboard');
      } else if (data.user.role === 'ADMIN') {
        router.push('/admin/dashboard');
      } else {
        router.push('/');
      }
    }
  };

  return (
    <Layout>
      <div className="card form-card">
        <h2>Login</h2>
        {error && <p style={{ color: 'red', fontSize: 13 }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
