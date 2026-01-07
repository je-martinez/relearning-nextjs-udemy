"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <>
      <li>
        <Link
          href={href}
          className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gray-200 transition-colors duration-300 ${
            isActive
              ? "text-white bg-linear-to-r from-sky-600 to-cyan-400 hover:bg-sky-600 hover:to-cyan-400"
              : "text-gray-600 group"
          }`}
        >
          {icon}
          <span className="-mr-1 font-medium">{label}</span>
        </Link>
      </li>
    </>
  );
};
