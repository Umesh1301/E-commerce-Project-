import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {  Button, Typography } from "@mui/material";

let renderCount = 0;

// type FormValues={
// username:string
// email:string
// channel:string
// }
const ReactHookForm = () => {
  const form = useForm({
    // defaultValues:{
    //     username:"Umesh Yadav",
    //     email:"",
    //     channel:""
    // }
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();

      return {
        username: "Umesh",
        email: data.email,
        channel: "",
      };
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  //   we can do directly by the help of the rect hook form
  //   const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data) => {
    console.log("first", data);
  };

  renderCount++;
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Hello Form ({renderCount / 2})</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          //   name={name}
          //   ref={ref}
          //   onChange={onChange}
          //   onBlur={onBlur}
          {...register("username", {
            required: {
              value: true,
              message: "UserName is required",
            },
          })}
        ></input>

        <br />
        <p>{errors.username?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            validate: {
              notAdmin: (fieldvalue) => {
                return (
                  fieldvalue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
              notBlacklisted: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "this domain is not supported"
                );
              },
            },
          })}
        ></input>

        <br />
        <p>{errors.email?.message}</p>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")}></input>
        <br />
        <p>{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
  
    </div>
  );
};

export default ReactHookForm;
