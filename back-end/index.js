const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

//! Express Initialization
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/blogPost");

const userSchema = new mongoose.Schema({
  // email: String,
  // password: String,

  name: String,
  email: String,
  picture: String,
});

const blogSchema = {
  title: String,
  content: String,
  date: String,
  img: String,
  authorName: String,
  authorImg: String,
};

const Blog = mongoose.model("Note", blogSchema);

const Users = mongoose.model("User", userSchema);

// simple route
app.get("/api/", (req, res) => {
  Blog.find((err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});
app.get("/api/random", (req, res) => {
  var query = Blog.find();
  query.count(function (err, count) {
    if (err) {
      console.log(err);
    } else {
      const random = Math.floor(Math.random() * count);
      res.send({random: random});
    }
  });
});

app.get("/login", (req, res) => {
  res.redirect("https://127.0.0.1:3000");
});

app.post("/api/blogpost", (req, res) => {
  const { title, content, date, img, authorName, authorImg } = req.body;

  // console.log('Adding notes:::::', note);
  // notes.push({ title: note.title, content: note.content });
  // res.json("entry addedd");
  // console.log(notes)
  const newCompose = new Blog({
    title: title,
    content: content,
    date: date,
    img: img,
    authorName: authorName,
    authorImg: authorImg,
  });
  newCompose.save((err) => {
    if (!err) {
      res.send(`Successfully added ${req.body}`);
    } else {
      res.send(err);
    }
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
