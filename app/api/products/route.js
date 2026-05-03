import { NextResponse } from 'next/server';

// Static product data — replace with Prisma queries when DB is connected
const PRODUCTS = [
  {
    id: '1',
    name: 'NY 59FIFTY "ROSES"',
    slug: 'ny-59fifty-roses',
    description: 'Premium New York Yankees fitted cap with hand-embroidered rose detailing. Structured high crown. Grey undervisor. Limited edition.',
    price: 65.00,
    images: ['/cap-roses.png'],
    category: 'headwear',
    tags: ['new', 'fitted', 'embroidered'],
    featured: true,
    active: true,
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
    id: '2',
    name: 'SUPREME x NY 59FIFTY',
    slug: 'supreme-ny-59fifty',
    description: 'Exclusive Supreme collaboration with New Era. Black crown with iconic box logo side patch. Ultra-limited release.',
    price: 85.00,
    images: ['/cap-supreme.png'],
    category: 'headwear',
    tags: ['collab', 'limited', 'fitted'],
    featured: true,
    active: true,
    stock: 15,
    variants: [
      { size: '7', sku: 'SUP-NY-7', stock: 3 },
      { size: '7 1/8', sku: 'SUP-NY-718', stock: 4 },
      { size: '7 1/4', sku: 'SUP-NY-714', stock: 4 },
      { size: '7 3/8', sku: 'SUP-NY-738', stock: 4 },
    ],
  },
  {
    id: '3',
    name: 'LA 59FIFTY "STRAWBERRY"',
    slug: 'la-59fifty-strawberry',
    description: 'Los Angeles Dodgers fitted in a bold strawberry pink colorway. Structured high crown with green undervisor.',
    price: 65.00,
    images: ['/cap-strawberry.png'],
    category: 'headwear',
    tags: ['new', 'fitted', 'colorway'],
    featured: true,
    active: true,
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
    id: '4',
    name: 'WHITE SOX 2003 ALL-STAR',
    slug: 'white-sox-allstar-2003',
    description: 'Chicago White Sox 2003 All-Star Game commemorative fitted. Black crown with gold All-Star patch. Collector\'s edition.',
    price: 65.00,
    images: ['/cap-allstar.png'],
    category: 'headwear',
    tags: ['limited', 'fitted', 'patch'],
    featured: true,
    active: true,
    stock: 25,
    variants: [
      { size: '7 1/8', sku: 'WSX-AS03-718', stock: 6 },
      { size: '7 1/4', sku: 'WSX-AS03-714', stock: 8 },
      { size: '7 3/8', sku: 'WSX-AS03-738', stock: 6 },
      { size: '7 1/2', sku: 'WSX-AS03-712', stock: 5 },
    ],
  },
  {
    id: '5',
    name: 'VARSITY "FOREST"',
    slug: 'varsity-forest',
    description: 'Dark forest green fitted with varsity letter embroidery. Wool blend construction. New Era exclusive.',
    price: 55.00,
    images: ['/cap-varsity.png'],
    category: 'headwear',
    tags: ['new', 'fitted'],
    featured: false,
    active: true,
    stock: 40,
    variants: [
      { size: '7', sku: 'VAR-FOR-7', stock: 8 },
      { size: '7 1/4', sku: 'VAR-FOR-714', stock: 16 },
      { size: '7 1/2', sku: 'VAR-FOR-712', stock: 16 },
    ],
  },
  {
    id: '6',
    name: 'TACTICAL "CAMO"',
    slug: 'tactical-camo',
    description: 'Military-inspired camouflage fitted cap. Olive/tan woodland pattern. Structured crown. Blacked-out eyelets.',
    price: 60.00,
    images: ['/cap-camo.png'],
    category: 'headwear',
    tags: ['new', 'fitted', 'military'],
    featured: false,
    active: true,
    stock: 35,
    variants: [
      { size: '7', sku: 'TAC-CAMO-7', stock: 7 },
      { size: '7 1/4', sku: 'TAC-CAMO-714', stock: 14 },
      { size: '7 1/2', sku: 'TAC-CAMO-712', stock: 14 },
    ],
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const slug = searchParams.get('slug');

  let filtered = [...PRODUCTS];

  if (slug) {
    const product = filtered.find(p => p.slug === slug);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }

  if (featured === 'true') {
    filtered = filtered.filter(p => p.featured);
  }

  return NextResponse.json({
    products: filtered,
    total: filtered.length,
  });
}
