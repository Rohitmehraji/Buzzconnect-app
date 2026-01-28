import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData = [
  {
    name: 'Industrial Supplies & Machinery',
    subcategories: [
      { name: 'Industrial Machinery' },
      { name: 'Tools & Hardware' },
      { name: 'Safety Equipment' },
    ],
  },
  {
    name: 'Electronics & Electrical Goods',
    subcategories: [
      { name: 'Consumer Electronics' },
      { name: 'Components & Spares' },
      { name: 'Lighting & Fixtures' },
    ],
  },
  {
    name: 'Building & Construction Materials',
    subcategories: [
      { name: 'Cement & Concrete' },
      { name: 'Structural Steel' },
      { name: 'Pipes & Fittings' },
    ],
  },
  {
    name: 'Textiles, Apparel & Fabrics',
    subcategories: [
      { name: 'Apparel & Garments' },
      { name: 'Yarn & Fabric' },
      { name: 'Home Textiles' },
    ],
  },
];

async function main() {
  console.log('Start seeding...');
  for (const categoryData of seedData) {
    const category = await prisma.category.create({
      data: {
        name: categoryData.name,
        subcategories: {
          create: categoryData.subcategories,
        },
      },
    });
    console.log(`Created category with id: ${category.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
