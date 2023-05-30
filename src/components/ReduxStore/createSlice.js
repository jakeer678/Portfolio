import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  idToken: localStorage.getItem("idToken"),
  isloading:false
};
 export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.idToken = localStorage.setItem("idToken");
    },
    logaout(state, action) {
      state.isLogin = false;
      state.idToken = localStorage.removeItem();
    },
  },
});


export const authSliceActions = authSlice.actions
export default authSlice

