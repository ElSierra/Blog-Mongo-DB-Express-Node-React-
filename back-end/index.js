const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const findOrCreate = require("mongoose-findorcreate");

//! Express Initialization
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(
  session({ secret: "Hojoisaac", resave: false, saveUninitialized: false })
);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/blogPost");

const userSchema = new mongoose.Schema({
  // email: String,
  // password: String,
  googleId: String,
  name: String,
  photos: String,
  facebookId: String,
});

const blogSchema = {
  title: String,
  content: String,
  date: String,
  img: String,
};

const Blog = mongoose.model("Note", blogSchema);

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const Users = mongoose.model("User", userSchema);

passport.use(Users.createStrategy());
passport.serializeUser(function (user, cb) {
  //console.log(user.picture);
  process.nextTick(function () {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_KEY,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      Users.findOrCreate(
        {
          googleId: profile.id,
          name: profile.displayName,
          photos: profile.photos[0].value,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET_KEY,
      callbackURL: "http://localhost:8080/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile);
      Users.findOrCreate(
        { facebookId: profile.id, name: profile.displayName },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// simple route
app.get("/api/", (req, res) => {
  Blog.find((err, found) => {
    !err ? res.send(found) : console.log(err);
  });
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send(true);
  }
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login"}),

);
app.get("/api/checkLogin", (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    console.log(user);
  }
});
app.get("/login", (req, res) => {
  res.redirect("https://127.0.0.1:3000");
});

app.post("/api/blogpost", (req, res) => {
  const { title, content, date, img } = req.body;

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
