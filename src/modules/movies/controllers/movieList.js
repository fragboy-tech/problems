import fs from "fs";

const movieList = (req, res) => {
  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  const { movieTitile } = req.query;

  res.send({ success: true, data: movies });
};

export { movieList };
