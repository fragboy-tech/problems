import express from "express";
import fs from "fs";
import { route as movieRoutes } from "./modules/movies/routes/moviesRoutes.js";
import { route as bookRoutes } from "./modules/book/routes/booksRoutes.js";

const app = express();

app.use(express.json());

app.use("/movies", movieRoutes);

app.use("/book", bookRoutes);

app.get("/", (req, res) => {
  //html info page
  const html = fs.readFileSync("./index.html");

  res.setHeader("Content-type", "text/html");
  res.send(html);
});

app.post("/movies", (req, res) => {
  const movie = req.body;

  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  movies.push(movie);

  fs.writeFileSync("./movies.json", movies);

  res.send({ success: true, message: "movie added" });
});

app.post("/book", (req, res) => {
  const book = req.body;

  const books = JSON.parse(fs.readFileSync("./books.json"));

  movies.push(movie);

  fs.writeFileSync("./books.json", books);

  res.send({ success: true, message: "book added" });
});

export { app };
