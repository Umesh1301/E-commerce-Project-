import { configureStore } from "@reduxjs/toolkit";
import EcommSlice from "./EcommSlice";
import authSlice from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    User: authSlice.reducer,
  },
});
