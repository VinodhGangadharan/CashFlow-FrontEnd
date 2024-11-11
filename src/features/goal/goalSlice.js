import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: "goal",
    initialState: {
        category: "",
        targetamount: "",
        deadline: ""
     
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setTargetAmount: (state, action) => {
            state.targetamount = action.payload
        },
        setDeadline: (state, action) => {
            state.deadline = action.payload
        }
      
    }
});

export const { setCategory, setTargetAmount, setDeadline } = goalSlice.actions;

export const selectCategory = state => state.goal.category;
export const selectTargetAmount = state => state.goal.targetamount;
export const selectDeadline = state => state.goal.deadline;


export default goalSlice.reducer;