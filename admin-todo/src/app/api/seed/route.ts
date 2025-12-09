import { BatchPayload } from "@/generated/prisma/internal/prismaNamespace";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

const seed = async (): Promise<BatchPayload> => {
  return await prisma.todo.createMany({
    data: [
      {
        title: "Buy groceries",
        description: "Buy groceries for the week",
        completed: getRandomBoolean(),
      },
      {
        title: "Buy clothes",
        description: "Buy clothes for the winter",
        completed: getRandomBoolean(),
      },
      {
        title: "Buy a new phone",
        description: "Buy a new phone for the winter",
        completed: getRandomBoolean(),
      },
      {
        title: "Buy a new laptop",
        description: "Buy a new laptop for the winter",
        completed: getRandomBoolean(),
      },
      {
        title: "Buy a new car",
        description: "Buy a new car for the winter",
        completed: getRandomBoolean(),
      },
      {
        title: "Buy a new house",
        description: "Buy a new house for the winter",
        completed: getRandomBoolean(),
      },
      {
        title: "Buy a new boat",
        description: "Buy a new boat for the winter",
        completed: getRandomBoolean(),
      },
    ],
  });
};

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  const result = await seed();

  return NextResponse.json({
    success: true,
    seedSize: result.count,
    message: "Seed completed",
  });
}
