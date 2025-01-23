import express from "express";

import {
  movieList,
  movieDetail,
  movieAdd,
  movieEdit,
  movieUpdate,
  movieDelete,
} from "../controllers/controller.js";

const route = express.Router();

route.get("/", movieList);

route.get("/:id", movieDetail);

route.post("/", movieAdd);

route.put("/:id", movieEdit);

route.patch("/:id", movieUpdate);

route.delete("/:id", movieDelete);

export { route };
