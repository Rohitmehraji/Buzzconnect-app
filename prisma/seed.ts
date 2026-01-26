import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed Categories and Subcategories
  const categories = [
    {
      name: 'Industrial Machinery',
      subcategories: ['Construction Machinery', 'Agricultural Machinery', 'Packaging Machines'],
    },
    {
      name: 'Electronics & Electrical',
      subcategories: ['Semiconductors', 'Power Supplies', 'Automation & Control Systems'],
    },
    {
      name: 'Textiles & Garments',
      subcategories: ['Apparel', 'Home Textiles', 'Yarn & Fabric'],
    },
  ];

  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: {
        name: category.name,
      },
    });

    for (const subcategory of category.subcategories) {
      await prisma.subcategory.create({
        data: {
          name: subcategory,
          categoryId: createdCategory.id,
        },
      });
    }
  }

  // Seed Subscription Plans
  const plans = [
    {
      name: 'Free',
      price: 0,
      productLimit: 10,
      leadLimit: 5,
      priorityListing: false,
    },
    {
      name: 'Standard',
      price: 49.99,
      productLimit: 50,
      leadLimit: 25,
      priorityListing: false,
    },
    {
      name: 'Premium',
      price: 99.99,
      productLimit: 200,
      leadLimit: 100,
      priorityListing: true,
    },
  ];

  for (const plan of plans) {
    await prisma.plan.create({
      data: plan,
    });
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
