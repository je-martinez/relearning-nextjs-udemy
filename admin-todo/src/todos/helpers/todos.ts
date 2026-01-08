import { Todo } from "@/generated/prisma/client";

export const toggleTodo = async (todo: Todo) => {
  const updatedTodo = await fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });
  const updatedTodoData = await updatedTodo.json();
  return updatedTodoData.data as Todo;
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
