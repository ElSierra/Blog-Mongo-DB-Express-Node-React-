const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/blogPost");

blogSchema = {
  title: String,
  content: String,
  date: String,
  img: String,
};

const Blog = mongoose.model("Note", blogSchema);
// simple route
app.get("/api/", (req, res) => {
  Blog.find((err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});
app.post("/api/blogpost", (req, res) => {
  const {title, content, date, img} = req.body;

  // console.log('Adding notes:::::', note);
  // notes.push({ title: note.title, content: note.content });
  // res.json("entry addedd");
  // console.log(notes)
  const newCompose = new Blog({
    title: title,
    content: content,
    date: date,
    img: img,
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
