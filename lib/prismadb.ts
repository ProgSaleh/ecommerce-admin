import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// if you do this:
//    const prismadb = new PrismaClient();
// in developement env,
// you'll create a new PrismaClient EVERY SINGLE TIME you change in the code
// (hot reloading will run and reinstanciate the client!!)
const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;
