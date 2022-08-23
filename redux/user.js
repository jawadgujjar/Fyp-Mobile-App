import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    authToken: "",
    isLoggedIn: false,
    schedule: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setschedule: (state, action) => {
      state.schedule = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setToken, setLoginState, setschedule } =
  userSlice.actions;

export default userSlice.reducer;
