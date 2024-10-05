import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./customer.slice";
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import actionSlice from "./action.slice";
import navigationSlice from "./navigation.slice";
import headerSearchSlice from "./headerSearch.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        customers: customerSlice,
        actions: actionSlice,
        navigations: navigationSlice,
        search: headerSearchSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
