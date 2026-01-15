// pages/supplier/dashboard.js
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function SupplierDashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This is a placeholder for fetching the supplier's profile.
    // In a real application, you would fetch this data from an API
    // and authenticate the user.
    setProfile({
      companyName: "John Doe's Company",
      address: '123 Main St, Anytown, USA',
      contactNumber: '555-1234',
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="card">
        <h2>Supplier Dashboard</h2>
        <div>
          <strong>Company Name:</strong> {profile.companyName}
        </div>
        <div>
          <strong>Address:</strong> {profile.address}
        </div>
        <div>
          <strong>Contact Number:</strong> {profile.contactNumber}
        </div>
      </div>
    </Layout>
  );
}
