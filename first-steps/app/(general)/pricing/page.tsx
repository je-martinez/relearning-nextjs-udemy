import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relearning Next.js | Pricing",
  description: "Relearning Next.js with Vercel | Pricing page",
  keywords: ["next.js", "react", "javascript", "typescript", "vercel"],
};

export default function PricingPage() {
  return <h1 className="text-2xl font-bold text-center p-4">Pricing</h1>;
}
