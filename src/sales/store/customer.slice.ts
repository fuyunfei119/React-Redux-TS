import { createSlice } from "@reduxjs/toolkit";
import { customer } from "../modul/customer.modul";

interface customerState {
    customers: customer[];
}

const initialState: customerState = {
    customers: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: "123 Main St, Anytown, USA"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "098-765-4321",
            address: "456 Maple Ave, Somewhere, USA"
        },
        {
            id: 3,
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            phone: "555-555-5555",
            address: "789 Oak Dr, Hometown, USA"
        }
    ]
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {}
});

export default customerSlice.reducer;