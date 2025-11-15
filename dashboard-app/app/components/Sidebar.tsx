import Image from "next/image";
import {
  IoLogoReact,
  IoCalculatorOutline,
  IoSquareOutline,
  IoFootballOutline,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoSquareOutline className="w-6 h-6" />,
    title: "Main",
    subTitle: "Main Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline className="w-6 h-6" />,
    title: "Counter",
    subTitle: "Counter Overview",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootballOutline className="w-6 h-6" />,
    title: "Pokemons",
    subTitle: "Static Generation",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 z-10 text-slate-300 w-1/4 left-0 min-h-screen overflow-y-hidden"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <IoLogoReact className="w-6 h-6 mr-2" />
          <span className="text-blue-500">Dash</span>
          <span>8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://avatar.iran.liara.run/public/32"
              alt=""
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Jose E. Martinez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
