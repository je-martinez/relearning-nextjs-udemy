import Link from "next/link";
import Image from "next/image";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";

const sidebarItems = [
  {
    href: "/dashboard",
    icon: <CiBookmarkCheck size={30} />,
    label: "Dashboard",
  },
  {
    href: "/dashboard/categories",
    icon: <CiBookmarkCheck size={30} />,
    label: "Categories",
  },
];

export const Sidebar = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/dashboard" title="home">
              <Image
                src="https://img.freepik.com/vector-gratis/vector-diseno-degradado-colorido-pajaro_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
                alt="logo"
                width={64}
                height={64}
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src="https://gravatar.com/avatar/b33a6f907ff260a5f3106c2df5b97b79?s=400&d=robohash&r=x"
              alt="user avatar"
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={128}
              height={128}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.href} {...item} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
