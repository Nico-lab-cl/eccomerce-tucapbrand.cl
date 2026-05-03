import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding TUCAP database...');

  // Create Categories
  const headwear = await prisma.category.upsert({
    where: { slug: 'headwear' },
    update: {},
    create: {
      name: 'Headwear',
      slug: 'headwear',
      description: 'Premium fitted caps, snapbacks, and headwear.',
      image: '/cap-roses.png',
    },
  });

  const apparel = await prisma.category.upsert({
    where: { slug: 'apparel' },
    update: {},
    create: {
      name: 'Apparel',
      slug: 'apparel',
      description: 'Brutalist streetwear. Tees, hoodies, and outerwear.',
    },
  });

  // Create Products
  const products = [
    {
      name: 'NY 59FIFTY "ROSES"',
      slug: 'ny-59fifty-roses',
      description: 'Premium New York Yankees fitted cap with hand-embroidered rose detailing.',
      price: 65.00,
      images: ['/cap-roses.png'],
      categoryId: headwear.id,
      tags: ['new', 'fitted', 'embroidered'],
      featured: true,
      stock: 45,
      variants: [
        { size: '7', sku: 'NY-ROSES-7', stock: 8 },
        { size: '7 1/8', sku: 'NY-ROSES-718', stock: 10 },
        { size: '7 1/4', sku: 'NY-ROSES-714', stock: 12 },
        { size: '7 3/8', sku: 'NY-ROSES-738', stock: 8 },
        { size: '7 1/2', sku: 'NY-ROSES-712', stock: 7 },
      ],
    },
    {
      name: 'SUPREME x NY 59FIFTY',
      slug: 'supreme-ny-59fifty',
      description: 'Exclusive Supreme collaboration with New Era. Black crown with iconic box logo.',
      price: 85.00,
      images: ['/cap-supreme.png'],
      categoryId: headwear.id,
      tags: ['collab', 'limited', 'fitted'],
      featured: true,
      stock: 15,
      variants: [
        { size: '7', sku: 'SUP-NY-7', stock: 3 },
        { size: '7 1/8', sku: 'SUP-NY-718', stock: 4 },
        { size: '7 1/4', sku: 'SUP-NY-714', stock: 4 },
        { size: '7 3/8', sku: 'SUP-NY-738', stock: 4 },
      ],
    },
    {
      name: 'LA 59FIFTY "STRAWBERRY"',
      slug: 'la-59fifty-strawberry',
      description: 'Los Angeles Dodgers fitted in a bold strawberry pink colorway.',
      price: 65.00,
      images: ['/cap-strawberry.png'],
      categoryId: headwear.id,
      tags: ['new', 'fitted', 'colorway'],
      featured: true,
      stock: 60,
      variants: [
        { size: '7', sku: 'LA-STRAW-7', stock: 10 },
        { size: '7 1/8', sku: 'LA-STRAW-718', stock: 15 },
        { size: '7 1/4', sku: 'LA-STRAW-714', stock: 15 },
        { size: '7 3/8', sku: 'LA-STRAW-738', stock: 10 },
        { size: '7 1/2', sku: 'LA-STRAW-712', stock: 10 },
      ],
    },
    {
      name: 'WHITE SOX 2003 ALL-STAR',
      slug: 'white-sox-allstar-2003',
      description: 'Chicago White Sox 2003 All-Star Game commemorative fitted.',
      price: 65.00,
      images: ['/cap-allstar.png'],
      categoryId: headwear.id,
      tags: ['limited', 'fitted', 'patch'],
      featured: true,
      stock: 25,
      variants: [
        { size: '7 1/8', sku: 'WSX-AS03-718', stock: 6 },
        { size: '7 1/4', sku: 'WSX-AS03-714', stock: 8 },
        { size: '7 3/8', sku: 'WSX-AS03-738', stock: 6 },
        { size: '7 1/2', sku: 'WSX-AS03-712', stock: 5 },
      ],
    },
    {
      name: 'VARSITY "FOREST"',
      slug: 'varsity-forest',
      description: 'Dark forest green fitted with varsity letter embroidery.',
      price: 55.00,
      images: ['/cap-varsity.png'],
      categoryId: headwear.id,
      tags: ['new', 'fitted'],
      featured: false,
      stock: 40,
      variants: [
        { size: '7', sku: 'VAR-FOR-7', stock: 8 },
        { size: '7 1/4', sku: 'VAR-FOR-714', stock: 16 },
        { size: '7 1/2', sku: 'VAR-FOR-712', stock: 16 },
      ],
    },
    {
      name: 'TACTICAL "CAMO"',
      slug: 'tactical-camo',
      description: 'Military-inspired camouflage fitted cap. Woodland pattern.',
      price: 60.00,
      images: ['/cap-camo.png'],
      categoryId: headwear.id,
      tags: ['new', 'fitted', 'military'],
      featured: false,
      stock: 35,
      variants: [
        { size: '7', sku: 'TAC-CAMO-7', stock: 7 },
        { size: '7 1/4', sku: 'TAC-CAMO-714', stock: 14 },
        { size: '7 1/2', sku: 'TAC-CAMO-712', stock: 14 },
      ],
    },
  ];

  for (const { variants, ...productData } of products) {
    const product = await prisma.product.upsert({
      where: { slug: productData.slug },
      update: productData,
      create: productData,
    });

    for (const variant of variants) {
      await prisma.variant.upsert({
        where: { sku: variant.sku },
        update: { ...variant, productId: product.id },
        create: { ...variant, productId: product.id },
      });
    }

    console.log(`  ✓ ${product.name}`);
  }

  // Create admin user
  await prisma.user.upsert({
    where: { email: 'admin@tucap.com' },
    update: {},
    create: {
      email: 'admin@tucap.com',
      name: 'TUCAP Admin',
      role: 'ADMIN',
    },
  });

  console.log('✅ Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
