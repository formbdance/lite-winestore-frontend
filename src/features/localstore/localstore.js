import { createSlice } from "@reduxjs/toolkit";


const corsineStore = createSlice({
    name: 'corsine',
    initialState: {
        items: {},
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            if(!Object.keys(state.items).includes(item._id)) {
                state.items[item._id] = {product: item, quales: 1}
            } else {
                state.items[item._id].quales += 1
            }
            
        },
        removeItem: (state, action) => {
            const id = action.payload;
            //state.items = {}
            delete state.items[id]
        },

        removeAll: (state => {
            state.items = {}
        })
    }

})

export const {addItem, removeItem, removeAll} = corsineStore.actions;
export default corsineStore.reducer