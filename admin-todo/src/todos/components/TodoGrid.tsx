"use client";

import { Todo } from "@/generated/prisma/client";
import { TodoItem } from "./TodoItem";

interface TodoGridProps {
  todos: Todo[];
}

export const TodoGrid = ({ todos }: TodoGridProps) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
