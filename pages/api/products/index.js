// pages/api/products/index.js
import prisma from '../../../lib/prisma';


export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { search, sellerId } = req.query;

    const where = {};

    if (sellerId) {
      where.sellerId = parseInt(sellerId);
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } },
      ];
    }

    try {
      const products = await prisma.product.findMany({
        where,
        include: {
          seller: {
            select: { id: true, name: true, email: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      return res.status(200).json({ products });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  if (req.method === 'POST') {
    const { name, description, price, category, location, sellerId } = req.body;

    if (!name || !description || !price || !category || !location || !sellerId) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          category,
          location,
          sellerId: parseInt(sellerId),
        },
      });

      return res.status(201).json({ product });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
