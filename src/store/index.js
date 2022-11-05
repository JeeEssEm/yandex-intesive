import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { categorySlice } from "./category";
import { cartSlice } from "./cart";
import { reviewSlice } from "./review";

export const store = configureStore({
  reducer: combineReducers({
    category: categorySlice.reducer,
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
    review: reviewSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
