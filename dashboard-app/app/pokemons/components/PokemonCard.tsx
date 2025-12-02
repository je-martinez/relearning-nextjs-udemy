"use client";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectIsFavorite,
  toggleFavorite,
} from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, id));
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              See more
            </Link>
            {/* <Link
              href={`/dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              See more
            </Link> */}
          </div>
        </div>
        <div>
          <div className="px-4 py-2 hover:bg-gray-100 flex">
            <button
              onClick={handleToggleFavorite}
              className="text-red-600 flex items-center justify-center cursor-pointer"
            >
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </button>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
              </p>
              <p className="text-xs text-gray-500">
                You can remove it from favorites at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
