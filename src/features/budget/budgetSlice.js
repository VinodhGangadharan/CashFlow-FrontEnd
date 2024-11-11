import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        category: "",
        limit: ""   
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setLimit: (state, action) => {
            state.limit = action.payload
        }
    
    }
});

export const { setCategory, setLimit} = budgetSlice.actions;

export const selectCategory = state => state.budget.category;
export const selectLimit = state => state.budget.limit;


export default budgetSlice.reducer;