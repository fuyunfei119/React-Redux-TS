import { createSlice } from "@reduxjs/toolkit";
import { action } from "../modul/action.modul";

interface actionState {
    actions: action[];
}

const initialState: actionState = {
    actions: [
        {
            name: "New",
        },
        {
            name: "Delete",
        },
        {
            name: "Edit",
        }
    ]
}

const actionSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {}
});

export default actionSlice.reducer;
