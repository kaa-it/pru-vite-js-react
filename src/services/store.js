import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./auth/slice.js";

const rootReducer = combineSlices(authSlice);

export const store = configureStore({
    reducer: rootReducer
});