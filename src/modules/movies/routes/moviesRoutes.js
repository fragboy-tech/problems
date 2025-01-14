import express from "express";

import { movieList, movieDetail } from "../controllers/controller.js";

const route = express.Router();

route.get("/", movieList);

route.get("/:id", movieDetail);

export { route };
