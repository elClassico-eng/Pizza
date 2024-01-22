import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlice";
import cart from "./slices/cartSlices";
import pizzaInfo from "./slices/pizzaInfoSlice";

export const store = configureStore({
    reducer: { filter, pizza, cart, pizzaInfo },
});
