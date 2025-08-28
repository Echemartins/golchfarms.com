// app/api/products/route.ts
import { NextRequest } from 'next/server';
import { dbConnect } from '@/lib/db';
import Product from '@/models/Product';

export const dynamic = 'force-dynamic';

export async function GET() {
  await dbConnect();
  const items = await Product.find({ active: true }).sort({ createdAt: -1 });
  return new Response(JSON.stringify(items), { status: 200 });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const created = await Product.create(body);
  return new Response(JSON.stringify(created), { status: 201 });
}