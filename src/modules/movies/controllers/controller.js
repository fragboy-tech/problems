import fs from "fs";
import { readJSONFile } from "../../../utils/utils.js";

const movieList = (req, res) => {
  const movies = { name: "adad" };

  const { limit, search } = req.query;

  if (limit) {
    const result = [];
    for (let i = 0; i <= limit; i++) {
      result.push(movies[i]);
    }

    res.send(result);
  }

  if (search) {
    const result = movies.filter((movie) => movie.title.includes(search));

    res.send(result);
  }

  res.send(movies);
};

const movieDetail = (req, res) => {
  const movies = readJSONFile("movies");
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id === parseInt(id));

  res.send(movie);
};

export { movieList, movieDetail };
