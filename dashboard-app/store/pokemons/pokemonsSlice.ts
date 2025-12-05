import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  favorites: {
    "1": {
      id: 1,
      name: "bulbasaur",
    },
  },
} satisfies PokemonsState as PokemonsState;

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;

      if (state.favorites[id.toString()]) {
        delete state.favorites[id.toString()];
        return;
      }

      state.favorites[id.toString()] = action.payload;
    },
  },
  selectors: {
    selectIsFavorite: (state: PokemonsState, id: number) =>
      !!state.favorites[id.toString()],
    selectFavorites: (state: PokemonsState) => Object.values(state.favorites),
  },
});

export const { selectIsFavorite, selectFavorites } = pokemonsSlice.selectors;

export const { toggleFavorite } = pokemonsSlice.actions;

export const pokemonsReducer = pokemonsSlice.reducer;
