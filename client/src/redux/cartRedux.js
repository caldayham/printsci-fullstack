import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity;
            state.products.push(action.payload);
            state.total += Number(Number(action.payload.totalPrice).toFixed(2));
        },
        updateProduct: (state, action) => { },
        deleteProduct: (state, action) => {
            state.quantity -= action.payload.quantity;
            state.products.splice(action.payload);
            state.total -= Number(Number(action.payload.totalPrice).toFixed(2));
        },
    },
});

export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;