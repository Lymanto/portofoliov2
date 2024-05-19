import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error('Database connection failed');
  }
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await main();
    const data = await prisma.portofolio.findMany({});

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'error', err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
