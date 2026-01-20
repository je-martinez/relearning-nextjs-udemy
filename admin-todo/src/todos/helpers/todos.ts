import { Todo } from "@/generated/prisma/client";

const delay = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const toggleTodo = async (id: string, completed: boolean):Promise<Todo> => {
  const updatedTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
  });
  const updatedTodoData = await updatedTodo.json();
  return updatedTodoData.data;
};

export const createTodo = async ({
  title,
  description,
  completed = false,
}: {
  title: string;
  description: string;
  completed?: boolean;
}) => {
  const newTodo = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify({ title, description, completed }),
  });
  const newTodoData = await newTodo.json();
  return newTodoData.data as Todo;
};

export const deleteCompletedTodos = async (): Promise<boolean> => {
  const deletedTodos = await fetch("/api/todos", {
    method: "DELETE",
  });
  const deletedTodosData = await deletedTodos.json();
  return deletedTodosData.success as boolean;
};
