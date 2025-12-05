"use client";

import { useAppSelector } from "@/store/hooks";
import { selectFavorites } from "@/store/pokemons/pokemonsSlice";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { NoFavorites } from "./NoFavorites";

export const FavoritesPokemons = () => {
  const favorites = useAppSelector((state) => selectFavorites(state));

  const [pokemons, _] = useState<SimplePokemon[]>(favorites);

  if (pokemons.length === 0) {
    return <NoFavorites />;
  }

  return <PokemonGrid pokemons={pokemons} />;
};
