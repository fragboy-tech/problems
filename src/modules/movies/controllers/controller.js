import fs from "fs";
import { readJSONFile } from "../../../utils/utils.js";

const movieList = (req, res) => {
  const movies = readJSONFile("movies");

  const { limit, search } = req.query;

  let result = [];

  if (limit) {
    for (let i = 0; i < limit; i++) {
      result.push(movies[i]);
    }
  }

  if (search) {
    result = result.filter((movie) => movie.title.includes(search));
  }

  if (!result.length) {
    res.send(movies);
  }

  res.send(result);
};

const movieDetail = (req, res) => {
  const movies = readJSONFile("movies");
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id === parseInt(id));

  res.send(movie);
};

const movieAdd = (req, res) => {
  const movie = req.body;

  const movies = readJSONFile("movies");

  movies.push(movie);

  fs.writeFileSync("./data/movies.json", JSON.stringify(movies));

  res.send({ success: true, message: "movie added" });
};

export { movieList, movieDetail, movieAdd };
