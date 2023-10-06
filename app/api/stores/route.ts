import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export default async function POST(req: Request) {
  try {
    // It's clerk's responsibility to handle the signIn.
    // When a user is authenticated, you extract the userId from the auth() function
    const { userId } = auth();

    const { body } = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unauthrized', { status: 401 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const store = prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('store_post', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
