import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import currentPageReducer from "./currentPageRedux";
import overlayRedux from "./overlayRedux";
import userReducer from "./userRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export default configureStore({
    reducer: {
        cart: cartReducer,
        currentPage: currentPageReducer,
        user: userReducer,
        overlay: overlayRedux,
    }
})