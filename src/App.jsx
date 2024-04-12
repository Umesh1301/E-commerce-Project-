import { Route, Routes } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  forgotPasswordAction,
  signInAction,
  signUpAction,
} from "./store/actions/asyncAuthAction";
import CartItems from "./components/CartItems";
import About from "./components/About";
import Home from "./components/Home";
import Store from "./components/Store";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import ReactHookForm from "./components/ReactHookForm";
import SignUpForm from "./Credentials/SignUpForm";

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
    <div>


      {" "}
      {/* <HeaderFooter></HeaderFooter> */}
      {/* <ReactHookForm/> */}

      <SignUpForm/>
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/products" element={<Products />} />

        <Route path="products/:productid" element={<ProductDetails />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/home" element={<Home />} />

        <Route path="cartItems" element={<CartItems />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Button onClick={handleSignUp}>Signup</Button>
      <Button onClick={handleSignIn}>Signin</Button>
      <Button onClick={handleForgotPassword}>Forgot Password</Button>
    </div>
  );
}

export default App;
