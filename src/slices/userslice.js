import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.token = null;
      state.userData = null;
    },
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
