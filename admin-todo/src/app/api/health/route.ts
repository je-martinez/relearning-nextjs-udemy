import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const prismaHealthCheck = async () => {
  try {
    await prisma.todo.findFirst();
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};

export async function GET() {
  const healthCheck = await prismaHealthCheck();
  return NextResponse.json(
    {
      status: healthCheck ? "ok" : "error",
      message: healthCheck
        ? "Database connection is healthy"
        : "Database connection is not healthy",
    },
    { status: healthCheck ? 200 : 500 }
  );
}
