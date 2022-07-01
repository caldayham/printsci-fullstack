import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: {
        loginShowing: false
    },
    reducers: {
        changeOverlay: (state, action) => {
            state.loginShowing = action.payload
        }
    }
})

export const { changeOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;