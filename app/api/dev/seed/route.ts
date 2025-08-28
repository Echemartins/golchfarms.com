// app/api/dev/seed/route.ts (guarded by token)
import { NextRequest } from 'next/server';
import { dbConnect } from '@/lib/db';
import Product from '@/models/Product';
import PriceItem from '@/models/PriceItem';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const token = req.headers.get('x-seed-token');
  if (token !== process.env.SEED_TOKEN) return new Response('Unauthorized', { status: 401 });

  await dbConnect();

  await Product.deleteMany({});
  await PriceItem.deleteMany({});

  await Product.insertMany([
    { slug: 'fresh-catfish', title: 'Fresh Catfish', category: 'fresh', description: 'Mélange (0.5 kg) & table-size (1 kg).', features: ['Bulk supply', 'Market‑ready'], unit: 'kg', price: 0 },
    { slug: 'dried-catfish', title: 'Dried Catfish', category: 'dried', description: 'Retail packs & wholesale.', features: ['Moisture‑controlled'], unit: 'pack', price: 0 },
    { slug: 'fish-feed', title: 'Golch Feed', category: 'feed', description: 'Quality floating feed.', features: ['Cost‑effective'], unit: 'bag (15kg)', price: 22000 },
    { slug: 'hatchery', title: 'Hatchery', category: 'hatchery', description: 'Fingerlings to jumbo.', features: ['Healthy stock'], unit: 'piece', price: 0 },
    { slug: 'consultancy', title: 'Consultancy', category: 'service', description: 'Farm setup & training.', features: ['Expert guidance'] },
  ]);

  await PriceItem.insertMany([
    { name: 'Fresh Catfish (Mélange ~0.5 kg)', unit: 'kg', price: 0, category: 'fresh' },
    { name: 'Fresh Catfish (Table‑size ~1 kg)', unit: 'kg', price: 0, category: 'fresh' },
    { name: 'Dried Catfish — Retail Pack', unit: 'pack', price: 0, category: 'dried' },
    { name: 'Golch Feed', unit: 'bag (15 kg)', price: 22000, category: 'feed' },
    { name: 'Fingerlings', unit: 'piece', price: 0, category: 'hatchery' },
  ]);

  return new Response(JSON.stringify({ ok: true }), { status: 201 });
}