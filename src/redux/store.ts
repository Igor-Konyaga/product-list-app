import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products.ts";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
