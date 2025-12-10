// pages/login.js
import { useState } from 'react';
import Layout from '../components/Layout';


export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

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
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data.user));
        if (data.user.role === 'SELLER') {
          window.location.href = '/seller/dashboard';
        } else {
          window.location.href = '/';
        }
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
