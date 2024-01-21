import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    cartItems: [],
};

export const cartSlices = createSlice({
    name: "cart	",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemCount = state.cartItems.find(
                (obj) => obj.id === action.payload.id
            );
            itemCount
                ? ++itemCount.count
                : state.cartItems.push({ ...action.payload, count: 1 });
            //prettier-ignore
            state.totalPrice = state.cartItems.reduce((sum, current) => sum + (current.price * current.count), 0)
        },

        itemMinus: (state, action) => {
            const itemCount = state.cartItems.find(
                (obj) => obj.id === action.payload
            );
            if (itemCount) {
                --itemCount.count;
            }
        },

        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (obj) => obj.id !== action.payload
            );
            state.totalPrice = state.cartItems.reduce(
                (sum, obj) => state.totalPrice - (sum + obj.price),
                0
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearCart, itemMinus } = cartSlices.actions;
export default cartSlices.reducer;
