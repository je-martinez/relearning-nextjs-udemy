import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relearning Next.js | About",
  description: "Relearning Next.js with Vercel | About page",
  keywords: ["next.js", "react", "javascript", "typescript", "vercel"],
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center p-4">About</h1>
      <span className="text-2xl font-bold">
        Current time: {new Date().toLocaleTimeString()}
      </span>
    </>
  );
}
