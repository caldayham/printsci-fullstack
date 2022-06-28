import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import currentPageReducer from "./currentPageRedux";

export default configureStore({
    reducer: {
        cart: cartReducer,
        currentPage: currentPageReducer,
    }
})