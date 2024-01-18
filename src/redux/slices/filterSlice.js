import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesID: 0,
    searchValue: "",
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
            state.categoriesID = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
    },
});

export const { setCategoriesID, setSort, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
