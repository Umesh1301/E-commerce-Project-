import { Route, Routes } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { forgotPasswordAction, signInAction, signUpAction } from "./store/actions/asyncAuthAction";
import CartItems from "./components/CartItems";
import About from "./components/About";

function App() {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    const newUserObj = {
      email: "umeshyadav1302@gmail.com",
      password: "789101113011994",
    };
    dispatch(signUpAction(newUserObj));
  };

  const handleSignIn = () => {
    const newUserObj = {
      email: "umeshyadav1302@gmail.com",
      password: "789101113011994",
    };
    dispatch(signInAction(newUserObj));
  };
  const handleForgotPassword = () => {
    const newUserObj = {
      email: "umeshyadav1302@gmail.com",
    };
    dispatch(forgotPasswordAction(newUserObj));
  };

  return (
    <div>  <Routes>

    <Route path="/" element={<HeaderFooter></HeaderFooter>}></Route>
  
      <Route path="cartItems" element={<CartItems/>}>

      </Route>
      <Route path="/About" element={<About/>}></Route>
    </Routes>
     
      <Button onClick={handleSignUp}>Signup</Button>
      <Button onClick={handleSignIn}>Signin</Button>
      <Button onClick={handleForgotPassword}>Forgot Password</Button>
    </div>
  );
}

export default App;
