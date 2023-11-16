import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from './features/items/productSlice'
import filteredSlice from "./features/items/filteredSlice";

export const store = configureStore({
    reducer: {
        itemslist: itemsSlice,
        filtereditems: filteredSlice,
    }
})


