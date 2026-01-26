"use client";

import { IoTrashOutline } from "react-icons/io5";
import * as apiTodosHelpers from "../helpers";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodoAction, deleteCompletedTodosAction } from "../actions";


interface NewTodoProps {
  type?: "rest" | "server";
}

export const NewTodo = ({ type = "rest" }: NewTodoProps) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();

  const clearForm = () => {
    setForm({
      title: "",
      description: "",
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    if (type === "rest") {

      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;
      await apiTodosHelpers.createTodo({ title, description });
      clearForm();
      router.refresh();
    }else {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;
      await addTodoAction(title, description);
      clearForm();
      router.refresh();
    }
  };

  const deleteCompletedTodos = async () => {
    if(type === "rest") {
      await apiTodosHelpers.deleteCompletedTodos();
      router.refresh();
    }else {
      await deleteCompletedTodosAction();
    }
  };

  return (
    <form className="flex w-full gap-4" onSubmit={onSubmit}>
      <div className="w-5/12">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border-2 text-black bg-white border-gray-200 outline-none focus:border-sky-500 transition-all"
          placeholder="What needs to be done?"
        />
      </div>

      <div className="w-5/12">
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border-2 text-black bg-white border-gray-200 outline-none focus:border-sky-500 transition-all"
          placeholder="Description"
        />
      </div>

      <div className="flex flex-1 justify-end">
        <button
          type="submit"
          className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        >
          Create
        </button>
        <button
          onClick={deleteCompletedTodos}
          type="button"
          className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
        >
          <IoTrashOutline />
          Delete Completed
        </button>
      </div>
    </form>
  );
};
