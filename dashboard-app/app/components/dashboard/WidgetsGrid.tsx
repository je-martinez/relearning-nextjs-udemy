"use client";
import {
  IoCalculatorOutline,
  IoFootballOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store/hooks";

export const WidgetsGrid = () => {
  const currentCounter = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-2">
      <SimpleWidget
        title="Counter"
        subtitle={`Example of a counter: ${currentCounter}`}
        icon={<IoCalculatorOutline size={50} />}
        label="Take me there"
        href="/dashboard/counter"
      />
      <SimpleWidget
        title="Pokemons"
        subtitle="Example of a pokemons"
        icon={<IoFootballOutline size={50} />}
        label="Take me there"
        href="/dashboard/pokemons"
      />
      <SimpleWidget
        title="Favorites"
        subtitle="Example of a favorites"
        icon={<IoHeartOutline size={50} />}
        label="Take me there"
        href="/dashboard/favorites"
      />
    </div>
  );
};
