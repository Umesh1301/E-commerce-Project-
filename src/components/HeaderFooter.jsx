import {
  Facebook,
  Instagram,
  ShoppingCart,
  Twitter,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Card,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../store/EcommSlice";

const HeaderFooter = () => {
  const articles = useSelector((state) => state.EcommStore.ListOfItems);
  const cartItem = useSelector((state) => state.EcommStore.cart);
  const dispatch = useDispatch();
  console.log(articles);

  const navigate = useNavigate();
  return (
    <div>
      <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
        <AppBar>
          <Toolbar>
            {" "}
            <Typography
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/home")}
            >
              HOME
            </Typography>
            <Typography
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/About")}
            >
              {" "}
              ABOUT
            </Typography>
            <Typography sx={{ flexGrow: 1,cursor:'pointer' }} onClick={()=>navigate("/store")}>STORE</Typography>
            <Badge badgeContent={cartItem.length}>
              <ShoppingCart
                onClick={() => navigate("/cartItems")}
              ></ShoppingCart>
            </Badge>
          </Toolbar>
        </AppBar>
      </div>
    

      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "10px",
          background: "black",
          // zIndex: 1000, // Ensure the footer is above other content
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <span
              style={{ fontWeight: "bold", fontSize: "30px", color: "white" }}
            >
              THE PANTHER
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              <Link href="https://www.instagram.com/">
                <Instagram sx={{ fontSize: "40px", color: "white" }} />{" "}
              </Link>

              <Link href="http://www.facebook.com/">
                <Facebook sx={{ fontSize: "40px", color: "white" }} />
              </Link>
              <Link href="https://twitter.com/">
                {" "}
                <Twitter sx={{ fontSize: "40px", color: "white" }} />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFooter;
