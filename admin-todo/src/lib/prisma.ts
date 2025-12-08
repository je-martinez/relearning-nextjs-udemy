import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

let prisma: PrismaClient;

const getPgAdapter = () => {
  return new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
};

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter: getPgAdapter() });
} else {
  const globalForPrisma = globalThis as typeof globalThis & {
    prisma?: PrismaClient;
  };
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ adapter: getPgAdapter() });
  }
  prisma = globalForPrisma.prisma;
}

export default prisma;
