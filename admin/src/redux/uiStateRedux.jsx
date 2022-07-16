import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "sideNavState",
  initialState: {
    dashboard: true,
    crudData: false,
    analytics: false,
    notifications: false,
    team: false,
  },
  reducers: {
    updateDashboard: (state) => {
      state.dashboard = !state.dashboard;
    },
  },
});

export const { changePage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
