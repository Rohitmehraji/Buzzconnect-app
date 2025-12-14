// pages/supplier/profile.js
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import prisma from '../../lib/prisma';

export default function ProfilePage({ profile: initialProfile }) {
  const [profile, setProfile] = useState(initialProfile);

  // Since this is a placeholder, we're not fetching fresh data on the client
  // but in a real app, you'd probably want to.

  if (!profile) {
    return (
      <Layout>
        <p>Loading profile...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="card">
        <h2>{profile.companyName}</h2>
        <p>Welcome to your supplier dashboard. Full profile editing is coming soon!</p>
        <p>
          <strong>Address:</strong> {profile.address || 'Not set'}
        </p>
        <p>
          <strong>Contact:</strong> {profile.contactDetails || 'Not set'}
        </p>
        <p>
          <strong>GST:</strong> {profile.gst || 'Not set'}
        </p>
        <p>
          <strong>PAN:</strong> {profile.pan || 'Not set'}
        </p>
        <p>
          <strong>Verification Status:</strong> {profile.verificationStatus}
        </p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // NOTE: This is a placeholder for getting the logged-in user.
  // In a real app, you would get the user ID from the session.
  const userId = 1; // HACK: Hardcoded for now

  const profile = await prisma.supplierProfile.findUnique({
    where: { userId },
  });

  return {
    props: {
      profile: JSON.parse(JSON.stringify(profile)),
    },
  };
}
