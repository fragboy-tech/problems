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

export { app };
