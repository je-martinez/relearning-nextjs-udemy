import { WidgetsGrid } from "@/app/components";

export const metadata = {
  title: "Main",
  description: "Main Page",
};

export default function MainPage() {
  return (
    <div className="text-black p-4">
      <h1 className="mt-2 text-2xl font-bold">Dashboard</h1>
      <p className="text-sm text-gray-500">Welcome to the dashboard</p>

      <div className="flex flex-wrap items-center justify-center gap-4 p-2">
        <WidgetsGrid />
      </div>
    </div>
  );
}
