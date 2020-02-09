const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
var knex = require("knex");

const signin = require("./controllers/signin");
const register = require("./controllers/register");
const explore = require("./controllers/explore");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "secret",
    database: "anime-watch"
    //connectionString: process.env.DATABASE_URL,
    //ssl: true
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("working!");
});

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.post("/explore", (req, res) => {
  explore.handleApiCall(req, res);
});

app.listen(3000, () => {
  console.log(`app is running on port 3000`);
});
