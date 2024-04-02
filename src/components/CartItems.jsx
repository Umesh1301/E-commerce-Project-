import { Avatar, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
    const navigate=useNavigate()
  const items = useSelector((state) => state.EcommStore.ListOfItems);

  return (
    <div>
      <Card
        sx={{
          padding: "10px",
          border: "darkorange",
          width: "300px",
marginLeft:'30px',
          bgcolor: "pink",
          marginBottom:'70px'
        }}
      >
        <Button
          variant="outlined"
          sx={{ display: "flex", marginLeft: "200px", borderColor: "black" }}
          onClick={()=>navigate("/")}
        >
          X
        </Button>
        <Typography sx={{ display: "flex", justifyContent: "center" ,fontSize:'40px'}}>
          cart
        </Typography>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography sx={{ textDecoration: "underline" }}>Item</Typography>
          <Typography sx={{ textDecoration: "underline" }}> Price</Typography>
        </div>

        {items.map((article) =>
          article.albums.map((itemList) => (
            <div key={itemList.id}>
              <Avatar
                src={itemList.image}
                alt="image"
                style={{ maxWidth: "100%" }}
              />
              {itemList.price}
            </div>
          ))
        )}
        <div style={{display:'flex',justifyContent:'end'}}> <Button variant="contained" color="primary" >
          PURCHASE
        </Button></div>
        
      </Card>
    </div>
  );
};

export default CartItems;
