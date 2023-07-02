import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "../features/products/products-slice";
export const store = configureStore({
  reducer: {
    products: productsReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
