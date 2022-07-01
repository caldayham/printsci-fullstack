import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import currentPageReducer from "./currentPageRedux";
import userReducer from "./userRedux";

export default configureStore({
    reducer: {
        cart: cartReducer,
        currentPage: currentPageReducer,
        user: userReducer,
    }
})