"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <>
      <div className="max-w-full max-h-96 p-8 space-y-6 rounded-xl border border-gray-200 bg-white">
        <h1 className="text-2xl font-bold text-black">
          Profile Page (Client Side)
        </h1>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="text-gray-500">Session User Name:</td>
              <td className="text-gray-500">{session?.user?.name}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Session User Email:</td>
              <td className="text-gray-500">{session?.user?.email}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Session User Image:</td>
              <td className="text-gray-500">{session?.user?.image}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Session User Roles:</td>
              <td className="text-gray-500">{session?.user?.roles?.join(", ")}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Session User ID:</td>
              <td className="text-gray-500">{session?.user?.id}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Session User Is Active:</td>
              <td className="text-gray-500">{session?.user?.isActive ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-full mt-4 min-h-72 p-8 space-y-6 rounded-xl border border-gray-200 bg-white">
        <pre className="text-gray-500 max-h-96 overflow-y-auto">
          <code>{JSON.stringify(session, null, 4)}</code>
        </pre>
      </div>
    </>
  );
}
