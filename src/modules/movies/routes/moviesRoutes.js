import express from "express";

import { movieList, movieDetail, movieAdd } from "../controllers/controller.js";

const route = express.Router();

route.get("/", movieList);

route.get("/:id", movieDetail);

route.post("/", movieAdd);

export { route };
