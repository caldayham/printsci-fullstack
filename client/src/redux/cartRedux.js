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
            state.total += Number(action.payload.totalPrice);
        },
        updateProduct: (state, action) => { },
        deleteProduct: (state, action) => {
            state.quantity -= action.payload.quantity;
            state.products.splice(action.payload);
            state.total -= Number(action.payload.totalPrice);
        }
    }
})

export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;