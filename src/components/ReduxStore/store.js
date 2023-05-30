import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./createSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
