import fs from "fs";
import { readJSONFile, writeJSONFile } from "../../../utils/utils.js";
import { connection as db } from "../../../db/connections.js";

const movieList = (req, res) => {
  const { limit, search, genre } = req.query;

  let query = `select * from movies`;

  const where = [];

  if (genre) {
    query += ` join movie_genres on movies.id = movie_genres.movie_id join genres on movie_genres.genre_id = genres.id `;
    where.push(`genres.name = "${genre}"`);
  }

  if (search) {
    where.push(`movies.title like '%${search}%'`);
  }

  if (where.length) {
    query += ` where ${where.join(" and ")}`;
  }

  if (limit) {
    query += ` limit ${limit}`;
  }

  db.query(query)
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => console.log(err));
};

const movieDetail = (req, res) => {
  const { id } = req.params;

  const query = ` select * from movies where movies.id = ${id}`;

  db.query(query)
    .then((data) => res.send(data[0]))
    .catch((err) => console.log(err));
};

const movieAdd = (req, res) => {
  const { title, year, rating, country, poster, director_id } = req.body;

  const query = `insert into movies (title, year, rating, country, poster, director_id)
  values ( "${title}", "${year}", ${rating}, "${country}", ${poster}, ${director_id})`;

  db.query(query)
    .then((data) => res.send(data[0]))
    .catch((err) => console.log(err));
};

const movieEdit = (req, res) => {
  const movies = readJSONFile("movies");
  const { id } = req.params;
  const movie = req.body;

  const foundMovie = movies.findIndex((movie) => movie.id === parseInt(id));
  movies[foundMovie] = movie;

  writeJSONFile("movies", foundMovie);
  res.send({ success: true, message: "movie updated" });
};

const movieUpdate = (req, res) => {
  const movies = readJSONFile("movies");
  const { id } = req.params;
  const movie = req.body;

  const targetMovie = movies.find((movie) => movie.id === parseInt(id));
  for (const key in movie) {
    if (targetMovie[key]) {
      targetMovie[key] = movie[key];
    }
  }

  writeJSONFile("movies", targetMovie);
  res.send({ success: true, message: "movie updated" });
};

const movieDelete = (req, res) => {
  const { id } = req.params;

  const movies = readJSONFile("movies");

  const remainingMovies = movies.filter((movie) => movie.id !== Number(id));

  writeJSONFile("movies", remainingMovies);
  res.send({ success: true, message: "movie deleted" });
};

export {
  movieList,
  movieDetail,
  movieAdd,
  movieEdit,
  movieUpdate,
  movieDelete,
};
