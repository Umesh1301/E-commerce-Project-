import { PlayCircleOutlineRounded } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(error);

  const fetchMoviesHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      console.log(response);
      // if(response.status === 200){
      //  setIsLoading(false)
      // }

      // .then((response) => {
      const data = await response.json();

      const transformedMovie = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovie(transformedMovie);
    } catch (error) {
      // setError(error.SyntaxError);
      setError(error.message);

      console.log(error);
    }
    setIsLoading(false);
  },[]);

  useEffect(()=>{
    fetchMoviesHandler();
  },[])

  // const t = setTimeout(() => {
  //   fetchMoviesHandler();
  // }, 5000);
  
  // const clearTimeOut = () => {
  //   console.log("first")
  //   clearTimeout(t);
  // }



  console.log(movie);

  let content = <p>Found no Movies</p>;
  if (movie.length > 0) {
    content = (
      <div>
        {" "}
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
        ))}{" "}
      </div>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading....</p>;
  }

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
      {/* <Button onClick={clearTimeOut}>Stop Retrying</Button> */}
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
        {/* {isLoading ? (
          <div>
            {" "}
            <CircularProgress />
          </div>
        ) : (
          <div>
            {" "}
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
            ))}{" "}
          </div>
        )}
        {!isLoading && movie.length === 0 && !error && <p>Movie not found</p>}
        {!isLoading && error && <p>{error}</p>} */}

        {content}
      </section>
    </div>
  );
};

export default Home;
