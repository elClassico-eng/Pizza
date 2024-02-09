import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItemsInfo = createAsyncThunk(
    "pizzaInfo/fetchItemsInfo",
    async ({ id }) => {
        const { data } = await axios.get(
            `https://657c99bc853beeefdb99afd3.mockapi.io/PizzaItems/${id}`
        );
        return data;
    }
);

const initialState = {
    itemsInfo: [],
    status: "",
};

export const pizzaSlice = createSlice({
    name: "pizzaInfo",
    initialState,
    reducers: {
        setPizzaInfo: (state, action) => {
            state.itemsInfo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsInfo.pending, (state) => {
                state.status = "loading";
                state.pizzasItems = [];
            })
            .addCase(fetchItemsInfo.fulfilled, (state, action) => {
                state.itemsInfo = action.payload;
                state.status = "success";
            })
            .addCase(fetchItemsInfo.rejected, (state) => {
                state.status = "error";
                state.itemsInfo = [];
            });
    },
});

export const selectPizzaInfo = (state) => state.pizzaInfo;

export const { setPizzaInfo } = pizzaSlice.actions;
export default pizzaSlice.reducer;
