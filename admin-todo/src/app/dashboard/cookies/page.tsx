import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
  title: "Admin Todo | Cookies",
  description: "Admin Todo | Cookies",
  keywords: "Admin Todo, Cookies, Cookies",
  author: "Admin Todo",
  creator: "Admin Todo",
  publisher: "Admin Todo",
  robots: "index, follow",
};

const tabBarItems = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
];

export default async function CookiesPage() {
  const cookiesStore = await cookies();
  const tabIndex = cookiesStore.get("tabIndex")?.value || 0;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">Cookies Page</h1>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-600 font-bold">Tab bar</span>
          <TabBar currentTabIndex={Number(tabIndex)} items={tabBarItems} />
        </div>
      </div>
    </div>
  );
}
