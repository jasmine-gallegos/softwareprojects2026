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

app.use(express.static("public/homePage"));

app.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM users");
    let users = [];
    result.rows.forEach((user) => {
        users.push(user.firstname);
    });

  console.log(result.rows);
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});