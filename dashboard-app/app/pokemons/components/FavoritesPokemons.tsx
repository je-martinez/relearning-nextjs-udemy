"use client";

import { useAppSelector } from "@/store/hooks";
import { PokemonGrid } from "./PokemonGrid";
import { NoFavorites } from "./NoFavorites";
import { selectFavoritesList } from "@/store/pokemons/pokemonsSlice";

export const FavoritesPokemons = () => {
  const favorites = useAppSelector(selectFavoritesList);

  if (favorites.length === 0) {
    return <NoFavorites />;
  }

  return <PokemonGrid pokemons={favorites} />;
};
