import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  favorites: {},
} satisfies PokemonsState as PokemonsState;

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavorites: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) => {
      state.favorites = action.payload;
    },

    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;

      if (state.favorites[id.toString()]) {
        delete state.favorites[id.toString()];
        return;
      }

      state.favorites[id.toString()] = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions;

export const pokemonsReducer = pokemonsSlice.reducer;

const selectFavorites = (state: RootState) => state.pokemons.favorites;

export const selectFavoritesList = createSelector(
  [selectFavorites],
  (favorites) => Object.values(favorites)
);

export const selectIsFavorite = createSelector(
  [selectFavorites, (_, id: number) => id],
  (favorites, id) => !!favorites[id.toString()]
);
