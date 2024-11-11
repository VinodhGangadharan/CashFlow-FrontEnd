import { createSlice } from "@reduxjs/toolkit";

export const recurringexpenseSlice = createSlice({
    name: "recurringexpense",
    initialState: {
        category: "",
        amount: "",
        expensedate: "",
        period: "",
        description:""
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setAmount: (state, action) => {
            state.amount = action.payload
        },
        setExpenseDate: (state, action) => {
            state.expensedate = action.payload
        },
        setPeriod: (state, action) => {
            state.period = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        }
    }
});

export const { setCategory, setAmount, setExpenseDate, setPeriod, setDescription } = recurringexpenseSlice.actions;

export const selectCategory = state => state.recurringexpense.category;
export const selectAmount = state => state.recurringexpense.amount;
export const selectExpenseDate = state => state.recurringexpense.expensedate;
export const selectPeriod = state => state.recurringexpense.period;
export const selectDescription = state => state.recurringexpense.description;

export default recurringexpenseSlice.reducer;