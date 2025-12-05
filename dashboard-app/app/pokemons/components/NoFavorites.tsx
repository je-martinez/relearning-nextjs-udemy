import { IoHeartOutline } from "react-icons/io5";

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] h-full gap-4">
      <IoHeartOutline size={50} className="text-red-500" />
      <h1 className="text-2xl font-bold">No favorites</h1>
      <p className="text-sm text-gray-500">
        You don&apos;t have any favorites yet.
      </p>
    </div>
  );
};
