import { createSlice } from "@reduxjs/toolkit";

export const investmentSlice = createSlice({
    name: "investment",
    initialState: {
        category: "",
        purchaseprice: "",
        currentvalue: "",
        performance: "",
        description:""
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setPurchasePrice: (state, action) => {
            state.purchaseprice = action.payload
        },
        setCurrentValue: (state, action) => {
            state.currentvalue = action.payload
        },
        setPerformance: (state, action) => {
            state.performance = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        }
    }
});

export const { setCategory, setPurchasePrice, setCurrentValue, setPerformance, setDescription } = investmentSlice.actions;

export const selectCategory = state => state.investment.category;
export const selectPurchasePrice = state => state.investment.purchaseprice;
export const selectCurrentValue = state => state.investment.currentvalue;
export const selectPerformance = state => state.investment.performance;
export const selectDescription = state => state.investment.description;

export default investmentSlice.reducer;