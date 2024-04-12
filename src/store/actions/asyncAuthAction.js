import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../services/ApiAuthService";

export const signUpAction = createAsyncThunk(
  "signUpAction", 
async (userObj) => {
    console.log('2', userObj)
  const response = await apiAuthService.userSignUp(userObj);
  return response;
});

export const signInAction = createAsyncThunk("signInAction", async (userObj) => {
    console.log('2', userObj)
  const response = await apiAuthService.userSignIn(userObj);
  return response;
});
export const forgotPasswordAction = createAsyncThunk("forgotPasswordAction", async (userObj) => {
    console.log('2', userObj)
  const response = await apiAuthService.forgotPassword(userObj);
  return response;
});

