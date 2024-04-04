import { Button, Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../store/EcommSlice";

const Store = () => {
  const articles = useSelector((state) => state.EcommStore.ListOfItems);
  const cartItem = useSelector((state) => state.EcommStore.cart);
  const dispatch = useDispatch();
  console.log(articles);

  const navigate = useNavigate();
  return (
    <div>
      <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}></div>
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
                sx={{
                  bgcolor: "yellow",
                  width: "300px",
                  marginLeft: "20px",
                  marginBottom: "70px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {articles.name}
                </div>
                <img
                  src={articles.image}
                  alt="loading"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                <div>
                  {" "}
                  Price:-{articles.price}
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "60px" }}
                    onClick={() => {
                      dispatch(addCartItem(articles)),
                        alert(`Your Product: ${articles.name} added to cart`);
                    }}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Store;
