import {createSlice} from "@reduxjs/toolkit";
import {login, logout} from "./actions";

const initialState = {
    user: null,
    isAuthChecked: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    selectors: {
        getIsAuthChecked: (state) => state.isAuthChecked,
        getUser: (state) => state.user,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
    }
});

export const { setIsAuthChecked, setUser } = authSlice.actions;
export const { getIsAuthChecked, getUser } = authSlice.selectors;