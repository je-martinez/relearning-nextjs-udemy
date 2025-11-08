import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Counter",
  description: "This is just a simple counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <span className="text-2xl font-bold">Welcome to the Counter Page</span>
      <CartCounter value={10} />
    </div>
  );
}
