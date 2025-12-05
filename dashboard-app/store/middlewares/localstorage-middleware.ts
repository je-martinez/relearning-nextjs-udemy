import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { toggleFavorite } from "../pokemons/pokemonsSlice";

export const localStorageMiddleware = (store: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === toggleFavorite.type) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(store.getState().pokemons.favorites)
      );
    }
    return;
  };
};
