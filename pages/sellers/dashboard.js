// pages/seller/dashboard.js
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';


export default function SellerDashboard() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    location: '',
  });
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) {
        const u = JSON.parse(stored);
        setUser(u);
        if (u.role === 'SELLER') {
          fetchProducts(u.id);
        }
      }
    }
  }, []);

  const fetchProducts = async (sellerId) => {
    const res = await fetch('/api/products?sellerId=' + sellerId);
    const data = await res.json();
    setProducts(data.products || []);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setMsg('');
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        price: parseFloat(form.price),
        sellerId: user.id,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setMsg(data.error || 'Error adding product');
    } else {
      setMsg('Product added successfully!');
      setForm({
        name: '',
        description: '',
        price: '',
        category: '',
        location: '',
      });
      fetchProducts(user.id);
    }
  };

  if (!user) {
    return (
      <Layout>
        <p>Please login as a seller to access the dashboard.</p>
      </Layout>
    );
  }

  if (user.role !== 'SELLER') {
    return (
      <Layout>
        <p>You are logged in as a buyer. Only sellers can access this page.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2>Seller Dashboard</h2>
      <div className="flex" style={{ gap: 24, alignItems: 'flex-start' }}>
        <div className="card" style={{ flex: 1 }}>
          <h3>Add New Product</h3>
          {msg && <p style={{ fontSize: 13 }}>{msg}</p>}
          <form onSubmit={handleSubmit}>
            <label>Product Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              required
            />
            <label>Price (₹)</label>
            <input
              name="price"
              type="number"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              required
            />
            <label>Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            />
            <label>Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
            <button className="btn-primary mt-3" type="submit">
              Save Product
            </button>
          </form>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <h3>Your Products</h3>
          {products.length === 0 && <p>No products yet.</p>}
          {products.map((p) => (
            <div key={p.id} style={{ marginBottom: 10 }}>
              <strong>{p.name}</strong>
              <p style={{ margin: 0 }}>₹{p.price} • {p.category}</p>
              <p style={{ margin: 0, fontSize: 12, color: '#555' }}>{p.location}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
