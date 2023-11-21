import { createSlice } from "@reduxjs/toolkit";
// Slice -- Used to keep certain pieces of state and reducers that take in actions
// Creating initialstate to check the userInfo from localstorage
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  // JSON.parse() - A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.
};

// authSlice -- it deals with localStorage , take the userData from API and put it in localStorage and manage states inside routes
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // reducer -- it takes in action and returns the state
    setUserInfo: (state, action) => {
      // action.payload -- which is the payload(userDetails) that we get from the action
      state.userInfo = action.payload;
      // setting the userInfo to localStorage
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      // A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify().
    },
    logout: (state, action) => {
      // Clearing data from state
      state.userInfo = null;
      // Removing data from localStorage
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setUserInfo, logout } = authSlice.actions;

export default authSlice.reducer;
