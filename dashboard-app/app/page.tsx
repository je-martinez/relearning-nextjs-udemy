import { redirect } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function Home() {
  redirect("/dashboard/main");
}
