// pages/api/enquiries.js
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, productId, buyerId, sellerId } = req.body;

  if (!message || !productId || !buyerId || !sellerId) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        message,
        productId: parseInt(productId),
        buyerId: parseInt(buyerId),
        sellerId: parseInt(sellerId),
      },
    });

    return res.status(201).json({ enquiry });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
