const express = require("express");
const cors = require("cors"); // permissao

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.use(routes);

app.listen(3333, () => console.log("Listening on port 3333..."));
