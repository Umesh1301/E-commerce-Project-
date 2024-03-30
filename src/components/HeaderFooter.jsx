import {
  Facebook,
  Instagram,
  ShoppingCart,
  Twitter,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Button,
  Card,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderFooter = () => {
  const articles = useSelector((state) => state.EcommStore.ListOfItems);

  console.log(articles);

  const navigate = useNavigate();
  return (
    <div>
      <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
        <AppBar>
          <Toolbar>
            {" "}
            <Typography sx={{ flexGrow: 1 }}>HOME</Typography>
            <Typography sx={{ flexGrow: 1 }}>ABOUT</Typography>
            <Typography sx={{ flexGrow: 1 }}>STORE</Typography>
            <Badge badgeContent={1}>
              <ShoppingCart></ShoppingCart>
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
        THE PANTHER
      </div>

      {/* <div>
        <Typography
          sx={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          MUSIC
        </Typography>

        <div style={{ display: "flex" }}>
          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 1</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>

          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 2</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>

          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 3</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>

          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 4</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <Typography
          sx={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          MERRCH
        </Typography>
        <div style={{ display: "flex", marginBottom: "80px" }}>
          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 1</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>

          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 2</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>

          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 3</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>

          <Card
            sx={{
              margin: "20px",
              padding: "10px",
              width: "400px",
              bgcolor: "lightgray",
            }}
          >
            <Typography>Album 4</Typography>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/953/233/small/space-retro-futurism-city-background-with-modern-elements-free-vector.jpg"
              alt="image"
              style={{ maxWidth: "100%" }}
            />
            <div>
              {" "}
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </Card>
        </div>
      </div> */}
      <div>
        {articles.map((items) => (
          <div key={items.id}>{items.name}</div>
        ))}
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
