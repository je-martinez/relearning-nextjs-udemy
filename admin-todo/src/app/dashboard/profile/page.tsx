"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-full max-h-96 p-8 space-y-6 rounded-xl border border-gray-200 bg-white">
      <h1 className="text-2xl font-bold text-black">
        Profile Page (Client Side)
      </h1>
      <p className="text-gray-500">{session?.user?.name}</p>
      <p className="text-gray-500">{session?.user?.email}</p>
      <p className="text-gray-500">{session?.user?.image}</p>
    </div>
  );
}
