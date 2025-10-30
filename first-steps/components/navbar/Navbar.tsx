import { NavbarItem } from "@/types";
import {
  CreditCardIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navbarItems: NavbarItem[] = [
  {
    id: "home",
    icon: <HomeIcon />,
    href: "/",
    label: "Home",
  },
  {
    id: "about",
    icon: <InfoIcon />,
    href: "/about",
    label: "About",
  },
  {
    id: "contact",
    icon: <MailIcon />,
    href: "/contact",
    label: "Contact",
  },
  {
    id: "pricing",
    icon: <CreditCardIcon />,
    href: "/pricing",
    label: "Pricing",
  },
];

// const anAsyncProccess = async () => {
//   return new Promise((resolve) => {
//     console.log("You are waiting for me to resolve");
//     setTimeout(() => {
//       resolve("Hello, I am an async process");
//     }, 3000);
//   });
// };

export const Navbar = async () => {
  //   await anAsyncProccess();

  console.log(
    "Navbar, you cannot see me in the console in the browser, because I am server component"
  );

  return (
    <nav className="flex justify-center gap-4">
      {navbarItems.map((item) => (
        <ActiveLink key={item.id} {...item} />
      ))}
    </nav>
  );
};
