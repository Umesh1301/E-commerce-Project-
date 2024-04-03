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
const dispatch=useDispatch()
  console.log(articles);

  const navigate = useNavigate();
  return (
    <div>
      <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
        <AppBar>
          <Toolbar>
            {" "}
            <Typography sx={{ flexGrow: 1 }}>HOME</Typography>
            <Typography sx={{ flexGrow: 1,cursor:"pointer"}} onClick={()=>navigate("/About")}> ABOUT</Typography>
            <Typography sx={{ flexGrow: 1 }}>STORE</Typography>
            <Badge badgeContent={cartItem.length}>
              <ShoppingCart
                onClick={() => navigate("/cartItems")}
              ></ShoppingCart>
            </Badge>
          </Toolbar>
        </AppBar>
      </div>
      <div
        style={{
          marginTop: "66px",
          backgroundColor: "grey",
          fontSize: "80px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontStyle: "italic",
        }}
      >
        PANTHER
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}> ALBUMS</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((items) =>
          items.itemList.map((articles) => (
            <div key={articles.id}>
              <Card
                sx={{ bgcolor: "yellow", width: "300px", marginLeft: "20px" ,marginBottom:"70px"}}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {articles.name}
                </div>
                <img
                  src={articles.image}
                  alt="loading"
                  style={{ maxWidth: "100%",maxHeight:"100%" }}
                />
                <div>
                  {" "}
                  Price:-{articles.price}
                  <Button variant="contained" sx={{ marginLeft: "60px" }} onClick={()=>{dispatch(addCartItem(articles)),alert("Your Product: {articles.name} added to cart")}}>
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            </div>
          ))
        )}
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
