export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo, TodoGrid } from "@/todos/components";

export const metadata = {
  title: "Admin Todo | Server Todos",
  description: "Admin Todo | Server Todos",
  keywords: "Admin Todo, Server Todos, Todos",
  author: "Admin Todo",
  creator: "Admin Todo",
  publisher: "Admin Todo",
  robots: "index, follow",
};

const getTodos = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return todos;
};

export default async function RestTodosPage() {
  const todos = await getTodos();

  return (
    <>
      <h1 className="text-2xl font-bold text-black">Rest Todos Page</h1>
      <div className="w-full mt-4 mx-auto">
        <NewTodo type="server" />
      </div>
      <TodoGrid todos={todos} type="server" />
    </>
  );
}
