import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
    "pizza/fetchItems",
    async ({ categories, sorts, sortOrder, search }) => {
        const { data } = await axios.get(
            `https://657c99bc853beeefdb99afd3.mockapi.io/PizzaItems?${categories}&sortBy=${sorts}&order=${sortOrder}${search}`
        );
        return data;
    }
);

const initialState = {
    pizzasItems: [],
    status: "",
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizzaItems: (state, action) => {
            state.pizzasItems = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = "loading";
                state.pizzasItems = [];
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.pizzasItems = action.payload;
                state.status = "success";
            })
            .addCase(fetchItems.rejected, (state) => {
                state.status = "error";
                state.pizzasItems = [];
            });
    },
});

export const { setPizzaItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
