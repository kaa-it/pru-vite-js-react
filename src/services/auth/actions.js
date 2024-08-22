import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../utils/api";

export const login = createAsyncThunk(
    "auth/login",
    async () => {
        return api.login();
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        return api.logout();
    }
);