import { createSlice } from "@reduxjs/toolkit";
import { forgotPasswordAction, signInAction, signUpAction } from "../actions/asyncAuthAction";

const initialState = {
  user: {
    userDetails: null,
    // status: loading,
  },
};

const authSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // User Sign Up
    // builder.addCase(signUpAction.pending, (state) => {
    //   state.user.userDetails = null;
    //   state.user.status = loading;
    // });
    // builder.addCase(signUpAction.fulfilled, (state, actions) => {
    //   console.log(actions.payload);
    // });

    // User Sign In
    builder.addCase(signInAction.pending, (state) => {
      state.user.userDetails = null;
      // state.user.status = loading;
    });
    builder.addCase(signInAction.fulfilled, (state, actions) => {
      console.log(actions.payload);
    });

    //Forgot password
    // builder.addCase(forgotPasswordAction.pending, (state) => {
    //   state.user.userDetails = null;
    //   state.user.status = loading;
    // });
    // builder.addCase(forgotPasswordAction.fulfilled, (state, actions) => {
    //   console.log(actions.payload);
    // });
  },
});
 export default authSlice;