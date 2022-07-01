import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import currentPageReducer from "./currentPageRedux";
import overlayRedux from "./overlayRedux";
import userReducer from "./userRedux";

export default configureStore({
    reducer: {
        cart: cartReducer,
        currentPage: currentPageReducer,
        user: userReducer,
        overlay: overlayRedux,
    }
})