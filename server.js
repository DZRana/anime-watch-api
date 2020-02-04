const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
var knex = require("knex");

//const register = require("./controllers/register");
//const signin = require("./controllers/signin");
const app = express();

app.get("/", (req, res) => {
  res.json("working!");
});

app.listen(3000, () => {
  console.log(`app is running on port 3000`);
});
