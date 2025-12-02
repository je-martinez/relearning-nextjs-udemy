import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterSlice";
import { pokemonsReducer } from "./pokemons/pokemonsSlice";

const reducers = {
  counter: counterReducer,
  pokemons: pokemonsReducer,
};

export const makeStore = () => {
  return configureStore({ reducer: combineReducers(reducers) });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
