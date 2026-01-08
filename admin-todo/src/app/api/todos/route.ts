import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { validateCreateOrUpdateTodo } from "./schema-validator";
import {
  convertPageAndPageSizeToNumbers,
  generatePagination,
  getSkipAndTake,
} from "@/utils";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");

  const { page: validatedPage, pageSize: validatedPageSize } =
    convertPageAndPageSizeToNumbers(Number(page), Number(pageSize));

  const { skip: validatedSkip, take: validatedTake } = getSkipAndTake(
    validatedPage,
    validatedPageSize
  );

  const total = await prisma.todo.count();

  const todos = await prisma.todo.findMany({
    skip: validatedSkip,
    take: validatedTake,
  });

  return NextResponse.json({
    success: true,
    data: todos,
    pagination: generatePagination(total, validatedPage, validatedPageSize),
    message: "Todos fetched successfully",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { title, description, completed } = body;

  try {
    const { success, data, message, errors } = await validateCreateOrUpdateTodo(
      {
        title,
        description,
        completed,
      }
    );

    if (!success || !data) {
      return NextResponse.json(
        {
          success: false,
          message: message,
          errors: errors,
        },
        { status: 400 }
      );
    }

    const todo = await prisma.todo.create({
      data: {
        title: data.title,
        description: data.description,
        completed: data.completed,
      },
    });

    return NextResponse.json({
      success: true,
      data: todo,
      message: "Todo created successfully",
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function DELETE(_: Request) {
  try {
    await prisma.todo.deleteMany({
      where: { completed: true },
    });

    return NextResponse.json({
      success: true,
      message: "Todos deleted successfully",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
