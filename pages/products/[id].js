// pages/products/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';


export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const res = await fetch('/api/products/' + id);
      const data = await res.json();
      setProduct(data.product || null);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
    }
  }, []);

  const handleEnquiry = async (e) => {
    e.preventDefault();
    setStatus('');
    if (!user) {
      setStatus('Please login as a buyer to send enquiry.');
      return;
    }
    if (!product) return;

    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        productId: product.id,
        buyerId: user.id,
        sellerId: product.sellerId,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus(data.error || 'Error sending enquiry');
    } else {
      setStatus('Enquiry sent to seller!');
      setMessage('');
    }
  };

  if (!product) {
    return (
      <Layout>
        <p>Loading product...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ₹{product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Location:</strong> {product.location}
        </p>
        <p>
          <strong>Seller:</strong> {product.seller?.name} ({product.seller?.email})
        </p>
      </div>

      <div className="card">
        <h3>Send Enquiry</h3>
        {status && <p style={{ fontSize: 13 }}>{status}</p>}
        <form onSubmit={handleEnquiry}>
          <label>Your Message</label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="btn-primary mt-3" type="submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </Layout>
  );
}
