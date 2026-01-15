// pages/register.js
import { useState } from 'react';
import Layout from '../components/Layout';


export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'BUYER',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Something went wrong');
    } else {
      setSuccess('Registration successful! Please login.');
    }
  };

  return (
    <Layout>
      <div className="card form-card">
        <h2>Create Account</h2>
        {error && <p style={{ color: 'red', fontSize: 13 }}>{error}</p>}
        {success && <p style={{ color: 'green', fontSize: 13 }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />

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

          <label>Account Type</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="BUYER">Buyer</option>
            <option value="SUPPLIER">Supplier</option>
          </select>

          <button type="submit" className="btn-primary mt-3">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
}
