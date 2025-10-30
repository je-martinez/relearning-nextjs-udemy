"use client";
import { NavbarItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = NavbarItem;
export const ActiveLink = ({ id, icon, href, label }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      key={id}
      href={href}
      className={`text-blue-500 flex items-center gap-2 ${
        isActive ? "text-white active" : ""
      } hover-underline-animation center [--underline-color:#FFFF]`}
    >
      {icon}
      {label}
    </Link>
  );
};
