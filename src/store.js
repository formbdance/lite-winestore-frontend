import {configureStore, combineReducers} from "@reduxjs/toolkit";
import itemsSlice from './features/items/productSlice'
import filteredSlice from "./features/items/filteredSlice";
import corsineStore from "./features/localstore/localstore"

import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    corsine: corsineStore,
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: {
        itemslist: itemsSlice,
        filtereditems: filteredSlice,
        corsine: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persister = persistStore(store)