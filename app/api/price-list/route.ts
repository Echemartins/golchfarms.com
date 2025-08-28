// app/api/price-list/route.ts
import { dbConnect } from '@/lib/db';
import PriceItem from '@/models/PriceItem';

export const dynamic = 'force-dynamic';

export async function GET() {
  await dbConnect();
  const items = await PriceItem.find({ active: true }).sort({ category: 1, name: 1 });
  return new Response(JSON.stringify(items), { status: 200 });
}