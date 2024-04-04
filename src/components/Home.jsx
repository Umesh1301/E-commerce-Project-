import { PlayCircleOutlineRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Home = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "66px",
          backgroundColor: "grey",
          fontSize: "80px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontStyle: "italic",
        }}
      >
        PANTHER
        <div>
          {" "}
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "blue" }}
          >
            Get our Latest Album
          </Button>
          <div style={{ color: "skyblue",display:'flex',justifyContent:'center' }}>
            <PlayCircleOutlineRounded
              sx={{ cursor: "pointer", fontSize: "100px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{ fontSize: "50px", display: "flex", justifyContent: "center" }}
      >
        {" "}
        TOUR
      </div>
      <div
        style={{
          display: "flex",
          flexDirection:'column',
       alignItems:'center',
         
          textDecoration: "underline"
        }}
      >
        <div style={{  fontSize: "40px",marginBottom:'10px' }}>
          {" "}
          Jul 16 Agra Music Theater{" "}
          <Button variant="contained" size="small">BUY TICKET</Button>
        </div>
        <div style={{marginBottom:'10px', fontSize: "40px" }}>
          {" "}
          Jul 19 Dlehi Stage Theater{" "}
          <Button variant="contained" size="small">BUY TICKET</Button>
        </div>
        <div style={{ marginBottom:'10px', fontSize: "40px" }}>
          {" "}
          Jul 22 Mumbai Live Theater{" "}
          <Button variant="contained" size="small">BUY TICKET</Button>
        </div>
        <div style={{ marginBottom:'10px', fontSize: "40px" }}>
          {" "}
          Jul 30 Bagnlore IT hub Theater{" "}
          <Button variant="contained" size="small">BUY TICKET</Button>
        </div>
        <div style={{ marginBottom:'10px', fontSize: "40px" }}>
          {" "}
          Aug 29 Kolkata Ammunation {" "}
          <Button variant="contained" size="small">BUY TICKET</Button>
        </div>
        <div style={{ marginBottom:'10px', fontSize: "40px" }}>
          {" "}
          Dec 25 Ghaziabad Automobile{" "}
          <Button variant="contained" size="small">BUY TICKET</Button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;
