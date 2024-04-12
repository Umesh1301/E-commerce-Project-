import { DevTool } from "@hookform/devtools";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpAction } from "../store/actions/asyncAuthAction";

const SignUpForm = () => {
    const form = useForm();
    const dispatch=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { register, control, handleSubmit } = form;

  const object = {
    Email: email,
    Password: password,
  };

  const submit = () => {
  dispatch(signUpAction(object));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">UserName</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <label htmlFor="password">PassWord</label>
        <br />
        <input
          type="password"
          id="password"
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignUpForm;
