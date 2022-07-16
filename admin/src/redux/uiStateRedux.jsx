import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "sideNavState",
  initialState: {
    dashboard: true,
    crud: false,
    analytics: false,
    notifications: false,
    team: false,
  },
  reducers: {
    updateDashboard: (state) => {
      state.dashboard = !state.dashboard;
    },
    updateCrud: (state) => {
      state.crud = !state.crud;
    },
    updateAnalytics: (state) => {
      state.analytics = !state.analytics;
    },
    updateNotifications: (state) => {
      state.notifications = !state.notifications;
    },
    updateTeam: (state) => {
      state.team = !state.team;
    },
  },
});

export const {
  updateDashboard,
  updateCrud,
  updateAnalytics,
  updateNotifications,
  updateTeam,
} = sideNavSlice.actions;
export default sideNavSlice.reducer;
