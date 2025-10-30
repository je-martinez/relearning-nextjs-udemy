import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relearning Next.js | Home",
  description: "Relearning Next.js with Vercel | Home page",
  keywords: ["next.js", "react", "javascript", "typescript", "vercel"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <span className="text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Click me
      </button>
    </main>
  );
}
