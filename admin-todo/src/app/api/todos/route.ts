import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const MAX_PAGE_SIZE = 100;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

const generatePagination = (total: number, page: number, pageSize: number) => {
  return {
    currentPage: Number(page),
    pageSize: Number(pageSize),
    total,
    totalPages: Math.ceil(total / Number(pageSize)),
    hasNextPage: Number(page) < Math.ceil(total / Number(pageSize)),
  };
};

const convertPageAndPageSizeToNumbers = (page: number, pageSize: number) => {
  return {
    page: isNaN(Number(page)) ? DEFAULT_PAGE : Number(page),
    pageSize: Math.min(
      isNaN(Number(pageSize)) ? DEFAULT_PAGE_SIZE : Number(pageSize),
      MAX_PAGE_SIZE
    ),
  };
};

const validatePageAndPageSize = (page: number, pageSize: number) => {
  return {
    page: page < 1 ? DEFAULT_PAGE : page,
    pageSize: pageSize < 1 ? DEFAULT_PAGE_SIZE : pageSize,
  };
};

const getSkipAndTake = (page: number, pageSize: number) => {
  const { page: validatedPage, pageSize: validatedPageSize } =
    validatePageAndPageSize(page, pageSize);
  return {
    skip: (validatedPage - 1) * validatedPageSize,
    take: validatedPageSize,
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || DEFAULT_PAGE;
  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE;

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

  const todo = await prisma.todo.create({
    data: { title, description, completed },
  });

  return NextResponse.json({
    success: true,
    data: todo,
    message: "Todo created successfully",
  });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, title, description, completed } = body;
  const todo = await prisma.todo.update({
    where: { id },
    data: { title, description, completed },
  });
  return NextResponse.json({
    success: true,
    data: todo,
    message: "Todo updated successfully",
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const todo = await prisma.todo.delete({
    where: { id },
  });
  return NextResponse.json({
    success: true,
    data: todo,
    message: "Todo deleted successfully",
  });
}
