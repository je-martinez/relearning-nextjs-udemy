import { Todo } from "@/generated/prisma/client";

export const toggleTodo = async (todo: Todo) => {
  const updatedTodo = await fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });
  const updatedTodoData = await updatedTodo.json();
  return updatedTodoData.data as Todo;
};
