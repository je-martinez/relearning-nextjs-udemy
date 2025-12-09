import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}
export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params;

  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    return NextResponse.json(
      {
        success: false,
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: todo,
    message: "Todo fetched successfully",
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params;
  const body = await request.json();
  const { title, description, completed } = body;

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { title, description, completed },
  });

  if (!updatedTodo) {
    return NextResponse.json(
      {
        success: false,
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: updatedTodo,
    message: "Todo updated successfully",
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params;
  const deletedTodo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!deletedTodo) {
    return NextResponse.json(
      {
        success: false,
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  await prisma.todo.delete({
    where: { id },
  });

  return NextResponse.json({
    success: true,
    data: deletedTodo,
    message: "Todo deleted successfully",
  });
}
