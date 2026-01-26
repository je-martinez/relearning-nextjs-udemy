"use client";

import { Todo } from "@/generated/prisma/client";
import { CiSquareCheck } from "react-icons/ci";
import styles from "./TodoItem.module.css";
import { startTransition, useMemo, useOptimistic } from "react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => Promise<Todo>;
}

export const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  const [optimisticTodo, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleted: boolean) => {
      return {
        ...state,
        completed: newCompleted,
      };
    },
  );

  const onToogleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!optimisticTodo.completed));
      await onToggle(optimisticTodo.id, !optimisticTodo.completed);
    } catch (error) {
      console.error("Error toggling todo", error);
      startTransition(() => toggleTodoOptimistic(!optimisticTodo.completed));
    }
  };

  const todoClass = useMemo(
    () => (optimisticTodo.completed ? styles.todoDone : styles.todoPending),
    [optimisticTodo.completed],
  );

  return (
    <div className={todoClass}>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <button className="w-6 h-6 cursor-pointer" onClick={onToogleTodo}>
          <CiSquareCheck
            size={20}
            color={optimisticTodo.completed ? "green" : "red"}
          />
        </button>
        <div className="px-4 flex flex-col gap-2">
          <h2 className="text-lg font-bold text-black">
            {optimisticTodo.title}
          </h2>
          <p className="text-sm text-gray-500">{optimisticTodo.description}</p>
        </div>
      </div>
    </div>
  );
};
