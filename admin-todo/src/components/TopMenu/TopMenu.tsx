import { cookies } from "next/headers";
import {
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
} from "react-icons/ci";

const getCookieCartServerSide = async (): Promise<{ [id: string]: number }> => {
  const cart = await cookies();
  return JSON.parse(cart.get("cart")?.value || "{}");
};

export const TopMenu = async () => {
  const cart = await getCookieCartServerSide();
  const cartSize = Object.values(cart).reduce((acc, curr) => {
    return acc + (isNaN(curr) ? 0 : curr);
  }, 0);

  return (
    <>
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4">
          <h5 className="text-2xl text-gray-600 font-medium">Dashboard</h5>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <CiMenuBurger size={30} />
          </button>
          <div className="flex space-x-2">
            <div className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <CiSearch color="black" />
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="leadingIcon"
                  placeholder="Search here"
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                />
              </div>
            </div>

            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 ">
              <CiSearch color="black" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <CiChat1 size={25} color="black" />
            </button>
            <button className="relative flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <CiShoppingBasket className="relative" size={25} color="black" />
              <span className="absolute top-1.5 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartSize}
              </span>
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
