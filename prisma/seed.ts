import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed Categories and Subcategories
  const categories = [
    {
      name: 'Industrial Machinery',
      subcategories: ['Construction Machinery', 'Agricultural Machinery'],
    },
    {
      name: 'Electronics & Components',
      subcategories: ['Semiconductors', 'Passive Components'],
    },
    {
      name: 'Textiles & Fabrics',
      subcategories: ['Yarn', 'Woven Fabrics'],
    },
  ];

  for (const categoryData of categories) {
    const category = await prisma.category.create({
      data: {
        name: categoryData.name,
        subcategories: {
          create: categoryData.subcategories.map((name) => ({ name })),
        },
      },
    });
    console.log(`Created category: ${category.name}`);
  }

  // Seed Plans
  const plans = [
    {
      name: 'Free',
      price: 0.0,
      productLimit: 10,
      leadLimit: 50,
      priorityListing: false,
    },
    {
      name: 'Basic',
      price: 49.99,
      productLimit: 50,
      leadLimit: 200,
      priorityListing: false,
    },
    {
      name: 'Premium',
      price: 99.99,
      productLimit: 200,
      leadLimit: 1000,
      priorityListing: true,
    },
  ];

  for (const planData of plans) {
    const plan = await prisma.plan.create({
      data: planData,
    });
    console.log(`Created plan: ${plan.name}`);
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
