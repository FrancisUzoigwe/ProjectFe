import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user: "" || null,
admin: "" || null,
toggle: false
}

const globalFile = createSlice({
  name: "userState",
  initialState,
  reducers: {
    userState: (state, {payload}) => {
        state.user = payload
    },
    adminState: (state, {payload}) => {
        state.admin = payload
    },
    changeToggle: (state, { payload }) => {
        state.toggle = payload;
      }
  }
});

export const {userState, adminState, changeToggle} = globalFile.actions

export default globalFile.reducer