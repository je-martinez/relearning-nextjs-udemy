import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterSlice";

const reducers = {
  counter: counterReducer,
};

export const makeStore = () => {
  return configureStore({ reducer: combineReducers(reducers) });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
