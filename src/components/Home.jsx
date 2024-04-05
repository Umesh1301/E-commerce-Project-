import { PlayCircleOutlineRounded } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React, { useState } from "react";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Home = () => {
  const [movie, setMovie] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovie = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovie(transformedMovie);
      });
    console.log(movie);
  };

  console.log(movie);

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
            sx={{ color: "white", borderColor: "skyblue" }}
            onClick={fetchMoviesHandler}
          >
            Get our Latest Album
          </Button>
          <div
            style={{
              color: "skyblue",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
      {/* <div
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
        
        
      </div> */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {movie.map((listofMovie) => (
          <div key={listofMovie.id}>
            <Card
              sx={{
                bgcolor: "blue",
                width: "300px",
                marginBottom: "20px",
                color: "white",
              }}
            >
              <div>{listofMovie.title}</div>
              <div>{listofMovie.openingText}</div>
            </Card>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
