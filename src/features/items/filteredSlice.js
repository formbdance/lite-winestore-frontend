import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from './api'

export const fetchCountry = createAsyncThunk('items/fetchCountry', api.getOnlyMarket)
const filteredSlice = createSlice({
    name: 'filtereditems',
    initialState: {
        list: [],
        country: 'idle',
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountry.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.status = 'success';
                state.list = action.payload;
            })
            .addCase(fetchCountry.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message
            })
    }
})
export const  selectFilteredItems = (state) => state.filtereditems.list;
export default filteredSlice.reducer;