import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    searchContent: string;
}

const initialState: SearchState = {
    searchContent: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchContent(state, action: PayloadAction<string>) {
            state.searchContent = action.payload;
        },
        clearSearchContent(state) {
            state.searchContent = '';
        }
    }
});

export const { setSearchContent, clearSearchContent } = searchSlice.actions;
export default searchSlice.reducer;