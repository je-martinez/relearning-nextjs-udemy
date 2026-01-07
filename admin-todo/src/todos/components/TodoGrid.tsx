"use client";

import { Todo } from "@/generated/prisma/client";
import { TodoItem } from "./TodoItem";
import * as apiHelpers from "../helpers";
import { useRouter } from "next/navigation";
interface TodoGridProps {
  todos: Todo[];
}

export const TodoGrid = ({ todos }: TodoGridProps) => {
  const router = useRouter();

  const handleToggleTodo = async (todo: Todo) => {
    await apiHelpers.toggleTodo(todo);
    router.refresh(); // Refresh the page to get the updated todos
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggleTodo} />
      ))}
    </div>
  );
};
