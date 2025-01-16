import express from "express";

import { bookList, bookDetail } from "../controllers/controller.js";

const route = express.Router();

route.get("/", bookList);

route.get("/:id", bookDetail);

export { route };
