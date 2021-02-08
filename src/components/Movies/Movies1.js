import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
const API_KEY = "d855d4e7";
const series = ["avengers", "iron man", "justice league", "batman"];
const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const promises = series.map((series) => {
      return fetch(
        `http://www.omdbapi.com/?s=${encodeURIComponent(
          series
        )}&y=2019&apikey=${API_KEY}`
      ).then((res) => res.json());
    });

    Promise.all(promises)
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => `Error occured ${err}`);
  }, []);

  const renderedList = movies.map((movie) => {
    console.log(movie.Search);
    return movie.Search.map((data) => {
      return <Movie movies={data} key={data.imdbID} />;
    });
  });
  return (
    <Grid
      container
      spacing={2}
      className="movies"
      style={{ marginTop: "10px" }}
    >
      {renderedList}
    </Grid>
  );
  // return null;
};

export default Movies;
