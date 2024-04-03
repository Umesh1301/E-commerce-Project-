import { Avatar, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  purchaseCart,
} from "../store/EcommSlice";

const CartItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemcart = useSelector((state) => state.EcommStore.cart);
  console.log(itemcart);

  const totalAmountOfItem = (id, price) => {
    const priceShown = itemcart.find((item) => item.id === id);
    if (!priceShown) {
      return 0;
    } else {
      const amount = priceShown?.Qty * price;
      return amount.toFixed(2);
    }
  };

  const totalCartValue = () => {
    let totalvalue = 0;
    if (itemcart.length > 0) {
      for (let i = 0; i < itemcart.length; i++) {
        totalvalue = totalvalue + itemcart[i].Qty * itemcart[i].price;
      }
    }
    return totalvalue;
  };

  return (
    <div>
      <Card
        sx={{
          padding: "10px",
          border: "darkorange",
          width: "300px",
          marginLeft: "30px",
          bgcolor: "pink",
          marginBottom: "70px",
        }}
      >
        <Button
          variant="outlined"
          sx={{ display: "flex", marginLeft: "200px", borderColor: "black" }}
          onClick={() => navigate("/")}
        >
          X
        </Button>
        <Typography
          sx={{ display: "flex", justifyContent: "center", fontSize: "40px" }}
        >
          cart
        </Typography>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography sx={{ textDecoration: "underline" }}>Item</Typography>
          <Typography sx={{ textDecoration: "underline" }}> Price</Typography>
        </div>

        {itemcart.map((itemList) => (
          <div key={itemList.id}>
            <Card>
              <Avatar
                src={itemList.image}
                alt="image"
                style={{ maxWidth: "100%" }}
              />
              {itemList.price}---{itemList.Qty}
              <Button onClick={() => dispatch(increaseCartQuantity(itemList))}>
                +
              </Button>
              <Button onClick={() => dispatch(decreaseCartQuantity(itemList))}>
                -
              </Button>
              <div>Amount={totalAmountOfItem(itemList.id, itemList.price)}</div>
            </Card>
            <Divider></Divider>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>Amount = Rs.{totalCartValue()}</div>{" "}
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(purchaseCart())}
          >
            PURCHASE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CartItems;
