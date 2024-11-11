import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
//import instance from "./instance";
//import authLoader from "../loaders/authLoader";
//import userdashboardLoader from "../loaders/userdashboardLoader";


export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await fetch('http://localhost:3001/auth/me');
    const jsonData = await response.json();
    return jsonData;
});
console.log(fetchUserData);



export const userSlice = createSlice({




    name: "user",
    initialState: {
        name: "",
        email: "",
        currency: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setCurrency: (state, action) => {
            state.currency = action.payload
        }
    }
});




export const { setName, setEmail, setCurrency } = userSlice.actions;

export const selectName = state => state.user.name;
export const selectEmail = state => state.user.email;
export const selectCurrency = state => state.user.currency;

export default userSlice.reducer;