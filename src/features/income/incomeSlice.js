import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
    name: "income",
    initialState: {
        category: "",
        amount: "",
        date: ""
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setAmount: (state, action) => {
            state.amount = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        }
    }
});

export const { setCategory, setAmount, setDate } = incomeSlice.actions;

export const selectCategory = state => state.income.category;
export const selectAmount = state => state.income.amount;
export const selectDate = state => state.income.date;

export default incomeSlice.reducer;