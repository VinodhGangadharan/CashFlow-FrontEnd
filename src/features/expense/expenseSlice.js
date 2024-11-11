import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        category: "",
        amount: "",
        date: "",
        description:""
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
        },
        setDescription: (state, action) => {
            state.description = action.payload
        }
    }
});

export const { setCategory, setAmount, setDate, setDescription } = expenseSlice.actions;

export const selectCategory = state => state.expense.category;
export const selectAmount = state => state.expense.amount;
export const selectDate = state => state.expense.date;
export const selectDescription = state => state.expense.description;

export default expenseSlice.reducer;