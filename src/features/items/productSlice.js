import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from './api'

export const fetchItems = createAsyncThunk('items/fetchItems', api.getItems);
export const addItem = createAsyncThunk('items/addItem', api.addItem);
export const deleteItem = createAsyncThunk('items/deleteItem', api.deleteItem);


const itemsSlice = createSlice({
    name: 'itemlist',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'success';
                state.list = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.list = state.list.filter((item) => item._id !== action.payload)
            })
    }
})



export const selectAllItems = (state) => state.itemlist.list;


export default itemsSlice.reducer;
//