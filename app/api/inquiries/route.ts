// app/api/inquiries/route.ts
import { NextRequest } from 'next/server';
import { dbConnect } from '@/lib/db';
import Inquiry from '@/models/Inquiry';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const created = await Inquiry.create(body);
  return new Response(JSON.stringify({ ok: true, id: created._id }), { status: 201 });
}