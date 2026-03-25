"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <>
        <div className="px-6 -mx-6 pt-4 flex justify-center items-center">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
            <IoShieldOutline />
            <span className="group-hover:text-gray-700 cursor-pointer">
              Logout
            </span>
          </button>
        </div>
      </>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        <div className="px-6 -mx-6 pt-4 flex justify-center items-center">
          <button onClick={() => signIn()} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
            <CiLogout />
            <span className="group-hover:text-gray-700 cursor-pointer">
              Login
            </span>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="px-6 -mx-6 pt-4 flex justify-center items-center">
        <button onClick={() => signOut()} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
          <CiLogout />
          <span className="group-hover:text-gray-700 cursor-pointer">
            Logout
          </span>
        </button>
      </div>
    </>
  );
};
