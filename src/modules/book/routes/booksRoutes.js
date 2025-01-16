import express from "express";

import { bookList, bookDetail, bookAdd } from "../controllers/controller.js";

const route = express.Router();

route.get("/", bookList);

route.get("/:id", bookDetail);
route.post("/", bookAdd);

export { route };
