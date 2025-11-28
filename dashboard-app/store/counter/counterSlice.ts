import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState = {
  value: 0,
  isReady: false,
} satisfies CounterState as CounterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialize(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.isReady = true;
      state.value = action.payload;
    },
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { initialize, increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
