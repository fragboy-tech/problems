import express from "express";
import fs from "fs";

import { movieList } from "../controllers/movieList.js";

const route = express.Router();

route.get("/", movieList);

export { route };
