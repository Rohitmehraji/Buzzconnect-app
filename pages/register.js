// pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'BUYER',
    companyName: '',
    address: '',
    contactPhone: '',
    businessCategory: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

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
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
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
            minLength={6}
          />

          <label>Account Type</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="BUYER">Buyer</option>
            <option value="SUPPLIER">Supplier</option>
          </select>

          {form.role === 'SUPPLIER' && (
            <>
              <hr style={{ margin: '16px 0' }} />
              <h3>Supplier Information</h3>
              <label>Company Name</label>
              <input name="companyName" value={form.companyName} onChange={handleChange} required />

              <label>Address</label>
              <input name="address" value={form.address} onChange={handleChange} required />

              <label>Contact Phone</label>
              <input name="contactPhone" value={form.contactPhone} onChange={handleChange} required />

              <label>Business Category</label>
              <input name="businessCategory" value={form.businessCategory} onChange={handleChange} required />
            </>
          )}

          <button type="submit" className="btn-primary mt-3">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
}
