import { PlayCircleOutlineRounded } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [date,setDate]=useState("")
  console.log(error);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://ecommerce-db185-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      console.log(response, "okok");
      // if(response.status === 200){
      //  setIsLoading(false)
      // }

      // .then((response) => {
      const data = await response.json();

      console.log(data);

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // Through this transformedMovie we get the movie from the server with the help of the get request

      // const transformedMovie = data.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovie(loadedMovies);
    } catch (error) {
      // setError(error.SyntaxError);
      setError(error.message);

      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  // const t = setTimeout(() => {
  //   fetchMoviesHandler();
  // }, 5000);

  // const clearTimeOut = () => {
  //   console.log("first")
  //   clearTimeout(t);
  // }

  const addMovieHandler = async () => {
    const movieData = {
      title: title,
      openingText: openingText,
      date:date
    };
    const response = await fetch(
      "https://ecommerce-db185-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movieData),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response, "OK");
    const data = response.json();
    console.log(data);
    if (response.status === 200) {
      fetchMoviesHandler();
    }
  };

  console.log(movie);

  const movieDeleteHandler = async (id) => {
    console.log(id);

    const response = await fetch(
      `https://ecommerce-db185-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "DELETE",
        // body: JSON.stringify(movieData),
        // headers: { "Content-Type": "application/json" },
      }
    );
    const data = response.json();

    if(response.status === 200){
      
      fetchMoviesHandler()
    }
  };

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
              <Button
                variant="outlined"
                sx={{ color: "white" }}
                onClick={() => movieDeleteHandler(listofMovie.id)}
              >
                Delete
              </Button>
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

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title, openingText);
    setTitle("");
    setOpeningText("");
    setDate("")
  };
  // const TitleHandler = (e) => {
  //   setTitle(e.target.value);
  // };
  // const OpeningTextHandler = (e) => {
  //   setOpeningText(e.target.value);
  // };

  // const movies ={
  //   title: titleRef.current.value,
  //   openingText: openingTextRef.current.value,
  //   releaseDate: releaseDateRef.current.value,

  // };

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

      <div>
        {" "}
        <Card sx={{ bgcolor: "yellowgreen", width: "300px" }}>
          <form onSubmit={submitHandler}>
            <label htmlFor="title">Title:-</label>
            <br />
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br />
            <label htmlFor="openingText">Opening Text:-</label>
            <br />
            <input
              id="openingText"
              type="text"
              value={openingText}
              onChange={(e) => setOpeningText(e.target.value)}
            ></input>

            <br />
            <label>Release Date</label>
            <br />
            <input type="datetime-local" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <br />
            <button
              variant="contained"
              sx={{ marginTop: "20px" }}
              type="submit"
            >
              Add
            </button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "skyblue",
                marginLeft: "10px",
              }}
              onClick={() => addMovieHandler()}
            >
              ADD MOVIES
            </Button>
          </form>
        </Card>
      </div>

      <div
        style={{ fontSize: "50px", display: "flex", justifyContent: "center" }}
      >
        {" "}
        TOUR
      </div>
      {/* <Button onClick={clearTimeOut}>Stop Retrying</Button> */}

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
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
