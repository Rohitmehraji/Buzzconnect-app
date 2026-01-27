import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed Plans
  await prisma.plan.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Free',
      price: 0,
      productLimit: 5,
      leadLimit: 10,
      priorityListing: false,
    },
  });

  await prisma.plan.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Premium',
      price: 999,
      productLimit: 50,
      leadLimit: 100,
      priorityListing: true,
    },
  });

  await prisma.plan.upsert({
      where: { id: 3 },
      update: {},
      create: {
          name: 'Enterprise',
          price: 4999,
          productLimit: 500,
          leadLimit: 1000,
          priorityListing: true,
        },
    });

  console.log('Plans seeded.');

  // Seed Categories and Subcategories
  const categories = [
    {
      name: 'Industrial Machinery',
      subcategories: ['Construction Machinery', 'Agricultural Machinery', 'Packaging Machines'],
    },
    {
      name: 'Electronics & Components',
      subcategories: ['Semiconductors', 'Sensors', 'Circuit Boards'],
    },
    {
      name: 'Building & Construction',
      subcategories: ['Cement & Concrete', 'Steel Bars', 'Pipes & Fittings'],
    },
    {
        name: 'Apparel & Textiles',
        subcategories: ['T-Shirts & Polos', 'Denim & Jeans', 'Yarn & Fabric'],
    },
  ];

  for (const cat of categories) {
    const category = await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: { name: cat.name },
    });

    for (const sub of cat.subcategories) {
      await prisma.subcategory.upsert({
        where: { name_categoryId: { name: sub, categoryId: category.id } }, // Assuming a composite unique key
        update: {},
        create: {
          name: sub,
          categoryId: category.id,
        },
      });
    }
  }

  console.log('Categories and Subcategories seeded.');

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
