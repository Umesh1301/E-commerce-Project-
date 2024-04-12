import { DevTool } from "@hookform/devtools";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {signInAction} from "../store/actions/asyncAuthAction"

const SignInForm = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, control, handleSubmit } = form;

  const userDetail = {
    Email: email,
    Password: password,
  };


  const submit = () => {
    dispatch(signInAction(userDetail));

  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <Button variant="contained" type="submit">SignIn</Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignInForm;
