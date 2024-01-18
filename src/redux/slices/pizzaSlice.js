import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzasItems: [],
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizzaItems: (state, action) => {
            state.pizzasItems = action.payload;
        },
    },
});

export const { setPizzaItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
