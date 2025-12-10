import { Todo } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { validateCreateOrUpdateTodo } from "../schema-validator";

interface Params {
  id: string;
}

const getTodoById = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  return todo;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params;

  const todo = await getTodoById(id);

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

  const { success, data, message, errors } = await validateCreateOrUpdateTodo({
    title,
    description,
    completed,
  });

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

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      completed: data.completed,
    },
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
  const deletedTodo = await getTodoById(id);

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
