import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relearning Next.js | Contact",
  description: "Relearning Next.js with Vercel | Contact page",
  keywords: ["next.js", "react", "javascript", "typescript", "vercel"],
};

export default function ContactPage() {
  return <h1 className="text-2xl font-bold text-center p-4">Contact</h1>;
}
