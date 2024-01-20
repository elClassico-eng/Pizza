import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlice";
import cart from "./slices/cartSlices";

export const store = configureStore({
    reducer: { filter, pizza, cart },
});
