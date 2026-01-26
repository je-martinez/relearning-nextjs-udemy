'use server';

import { Todo } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toogleTodoAction = async (id: string, completed: boolean):Promise<Todo> => {
    const todo = await prisma.todo.findUnique({
        where: { id },
    });

    if (!todo) {
        throw new Error(`Todo with id ${id} not found`);
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { completed },
    });
    
    revalidatePath("/dashboard/server-todos");
    return updatedTodo;
};

export const addTodoAction = async (title: string, description: string):Promise<Todo | { message: string }> => {
    try {
        const todo = await prisma.todo.create({
            data: { title, description, completed: false },
        });
        revalidatePath("/dashboard/server-todos");
        return todo;
    } catch (error) {
        console.error(error);
        return {
            message: "Failed to add todo",
        };
    }
};