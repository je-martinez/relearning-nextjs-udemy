"use client";

import { Todo } from "@/generated/prisma/client";
import { TodoItem } from "./TodoItem";
import { useRouter } from "next/navigation";
import * as apiHelpers from "@/todos/helpers";
import { toogleTodoAction } from "@/todos/actions";
interface TodoGridProps {
  todos: Todo[];
  type: "rest" | "server";
}

export const TodoGrid = ({ todos, type }: TodoGridProps) => {
  const router = useRouter();

  const onToggleTodo = async (id: string, completed: boolean) => {
    if (type === "rest") {
      const updatedTodo = await apiHelpers.toggleTodo(id, completed);
      router.refresh();
      return updatedTodo;
    } else {
      const updatedTodo = await toogleTodoAction(id, completed);
      return updatedTodo;
    }
  };


  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={() => onToggleTodo(todo.id, !todo.completed)} />
      ))}
    </div>
  );
};
