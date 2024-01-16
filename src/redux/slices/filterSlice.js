import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesID: 0,
    sort: {
        name: "популярности",
        description: "rating",
        sortOrder: "desc",
    },
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoriesID: (state, action) => {
            console.log(action.payload, state.categoriesID);
            state.categoriesID = action.payload;
        },
    },
});

export const { setCategoriesID } = filterSlice.actions; // действия
export default filterSlice.reducer;
