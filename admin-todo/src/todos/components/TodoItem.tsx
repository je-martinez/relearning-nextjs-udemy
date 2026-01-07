import { Todo } from "@/generated/prisma/client";
import { CiSquareCheck } from "react-icons/ci";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const todoClass = todo.completed ? styles.todoDone : styles.todoPending;

  return (
    <div className={todoClass}>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <button className="w-6 h-6 cursor-pointer">
          <CiSquareCheck size={20} color={todo.completed ? "green" : "red"} />
        </button>
        <div className="px-4 flex flex-col gap-2">
          <h2 className="text-lg font-bold text-black">{todo.title}</h2>
          <p className="text-sm text-gray-500">{todo.description}</p>
        </div>
      </div>
    </div>
  );
};
