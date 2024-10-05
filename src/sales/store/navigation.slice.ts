import { createSlice } from "@reduxjs/toolkit";
import { navigation } from "../modul/navigation.modul";

interface navigationState {
    navigations: navigation[];
}

const initialState: navigationState = {
    navigations: [
        {
            name: "sales",
        },
        {
            name: "purchase",
        },
        {
            name: "inventory",
        }
    ]
}

const actionSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {}
});

export default actionSlice.reducer;