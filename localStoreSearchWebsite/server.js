const express = require('express');
const pg = require('pg')

// import express from "express";
// import pg from "pg";

const app = express();
const port = 3330;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "softwareprojects2026",
    password: "sdU*ns7Bs$",
    port: 5432,
});

db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  let users = [];
  result.rows.forEach((user) => {
    users.push(users.firstname);
  });

  console.log(result.rows);
  res.render("index.ejs", { users: users, total: users.length });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});