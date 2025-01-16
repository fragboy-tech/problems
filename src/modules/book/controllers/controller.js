import fs from "fs";
import { readJSONFile } from "../../../utils/utils.js";

const bookList = (req, res) => {
  const books = readJSONFile("books");

  const { limit, search } = req.query;

  let result = [];

  if (limit) {
    for (let i = 0; i < limit; i++) {
      result.push(books[i]);
    }
  }

  if (search) {
    result = result.filter((book) => book.title.includes(search));
  }

  res.send(result);
};

const bookDetail = (req, res) => {
  const books = readJSONFile("books");
  const { id } = req.params;

  const book = books.find((book) => book.id === parseInt(id));

  res.send(book);
};

export { bookList, bookDetail };
