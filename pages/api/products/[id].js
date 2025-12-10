// pages/api/products/[id].js
import prisma from '../../../lib/prisma';


export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: {
        seller: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!product) return res.status(404).json({ error: 'Product not found' });

    return res.status(200).json({ product });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
