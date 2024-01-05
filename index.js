const express = require("express");
const bodyParser = require("body-parser");
// const connection = require("./db");
const Tweet = require("./seq"); // import the Tweet model
const mysql = require("mysql2");

const app = express(); // create express app
app.use(bodyParser.json()); // parse json
app.use(bodyParser.urlencoded({ extended: true })); // parse form data encoded in the url
const port = 3000; // runs on port 3000

// create MYSQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql#2024",
  database: "twitter",
});

let tweets = [];
// / is the base route
app.get("/tweets", (req, res) => {
  // connection.query('SELECT * FROM tweets', (err, result, fields) => {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         console.log("GET Successful. Number of Tweets: " + result);
  //         res.send(JSON.stringify(result));
  //     }
  // })
  const tweets = Tweet.findAll().then((tweets) => {
    console.log(tweets);
    res.json(tweets);
  });
});

// Select the database
connection.query("USE twitter", (err, result) => {
  if (err) throw err;
  console.log("Database selected");
});

app.post("/tweets", (req, res) => {
  // post tweets
  const tweetsRequests = req.body.text; // get the text from the body
  console.log(tweetsRequests);
  tweets.push(tweetsRequests);
  //   const tweet = {
  //     text: tweetsRequests,
  //   };

  Tweet.create({ user_id: "1", text: tweetsRequests });
  //   connection.query("INSERT INTO tweets SET ?", tweet, (err, result, fields) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(result);
  //     }
  //   });

  res.send("POSTED TWEETS: tweets " + tweetsRequests);
});

app.put("/tweets", (req, res) => {
  res.send("PUT Hello World!");
});

app.delete("/tweets", (req, res) => {
  res.send("DELETE Hello World!");
});

app.patch("/tweets", (req, res) => {
  res.send("PATCH Hello World!");
});

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
