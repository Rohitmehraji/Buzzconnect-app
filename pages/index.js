// pages/index.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useDebounce } from '../lib/hooks';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500); // 500ms debounce delay

  const fetchProducts = async (q = '') => {
    const res = await fetch('/api/products?search=' + encodeURIComponent(q));
    const data = await res.json();
    setProducts(data.products || []);
  };

  // Fetch products when the debounced search term changes
  useEffect(() => {
    fetchProducts(debouncedSearch);
  }, [debouncedSearch]);


  return (
    <Layout>
      <h1>Find Suppliers & Products</h1>
      <form style={{ margin: '16px 0' }}>
        <input
          placeholder="Search for product, category, location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {products.length === 0 && <p>No products found.</p>}

      {products.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description.slice(0, 120)}...</p>
          <p>
            <strong>₹{p.price}</strong> • {p.category} • {p.location}
          </p>
          <p>
            <span className="badge">Seller: {p.seller?.name}</span>
          </p>
          <Link href={`/products/${p.id}`}>
            <button className="btn-primary mt-2">View Details / Enquiry</button>
          </Link>
        </div>
      ))}
    </Layout>
  );
}
