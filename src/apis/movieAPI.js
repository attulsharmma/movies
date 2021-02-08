import axios from "axios";

export default axios.create({
  params: { r: "json" },
  limit: 5,
  headers: {
    "x-rapidapi-key": "1e75b560a7msh939a7bae5a3f568p11be7bjsn9b7c8fab37d4",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  },
});
