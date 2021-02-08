import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import { Grid } from "@material-ui/core";
import MovieAPI from "../../apis/movieAPI";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("Panther");
  useEffect(() => {
    async function getMovieData() {
      try {
        const response = await MovieAPI.get(
          "https://movie-database-imdb-alternative.p.rapidapi.com/",
          {
            params: { s: term ? term : "Avengers", page: 1 },
          }
        );
        const data = await response.data;
        setMovies(data.Search);
      } catch (error) {
        console.error(`This is error: ${error}`);
      }
    }
    getMovieData();
  }, [term]);
  const renderedList = movies.map((movie) => {
    return <Movie movies={movie} key={movie.imdbID} />;
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
};

export default Movies;
