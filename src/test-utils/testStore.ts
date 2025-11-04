import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "@/store/quotesSlice";

export const createTestStore = (preloadedState = {}) =>
  configureStore({
    reducer: { quotes: quotesReducer },
    preloadedState,
  });