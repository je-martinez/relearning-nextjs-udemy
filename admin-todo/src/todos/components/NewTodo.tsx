"use client";

import { IoTrashOutline } from "react-icons/io5";
import { createTodo } from "../helpers";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const NewTodo = () => {
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
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    await createTodo({ title, description });
    clearForm();
    router.refresh();
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-5/12 px-4 py-2 rounded-lg border-2 text-black bg-white border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="What needs to be done?"
      />

      <input
        type="text"
        name="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="ml-4 w-6/12 px-4 py-2 rounded-lg border-2 text-black bg-white border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Description"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        //TODO: onClick={ () => deleteCompleted() }
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
