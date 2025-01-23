import { app } from "./src/app.js";
import { connection } from "./src/db/connections.js";

app.listen(3000, () => {
  connection
    .connect()
    .then(() => console.log("connectod to db"))
    .catch((err) => cpnsole.log("error:", err));
  console.log("server listening on 3000");
});
