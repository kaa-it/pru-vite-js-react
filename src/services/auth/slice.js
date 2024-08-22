import {createSlice} from "@reduxjs/toolkit";
import {login, logout} from "./actions";

const initialState = {
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
    }
});