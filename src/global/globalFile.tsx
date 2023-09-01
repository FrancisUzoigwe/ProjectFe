import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  admin: "" || null,
  toggle: false,
};

const globalFile = createSlice({
  name: "userState",
  initialState,
  reducers: {
    userState: (state, { payload }) => {
      state.user = payload;
    },
    adminState: (state, { payload }) => {
      state.admin = payload;
    },
    changeToggle: (state: any, { payload }) => {
      state.toggle = payload;
    },
    AdminlogOut: (state) => {
      state.admin = null;
    },
    UserlogOut: (state) => {
      state.user = null;
    },
  },
});

export const { userState, UserlogOut, AdminlogOut, adminState, changeToggle } =
  globalFile.actions;

export default globalFile.reducer;
