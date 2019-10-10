const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

//signup route with POST
router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (password.length < 8) {
    //status 400 to tell the server that something went wrong
    return res
      .status(400)
      .json({ message: "Your password must be 8 characters minimum." });
  }

  if (!username) {
    return res.status(400).json({ message: "Your username cannot be empty." });
  }
  //if there is already a user with that username
  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res
          .status(400)
          .json({ message: "This username is already taken." });
      }

      //if not found
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      //if you use return here, the catch of the other then will catch the errors
      //User.create() returns a promise (if it doesn't fulfill in the .then(), it will be caught in the .catch() afterwards)
      return User.create({ username: username, password: hash }).then(
        dbUser => {
          req.login(dbUser, err => {
            if (err) {
              return res
                .status(500)
                .json({ message: "Error while attempting to login." });
            }
            res.json(dbUser);
          });
        }
      );
    })
    .catch(err => {
      res.json(err);
    });
});

//login route with POST
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  //use passport for authentication
  passport.authenticate("local", (err, user) => {
    //if non-user related error, error during de-serializing phase of passport
    if (err) {
      return res.status(500).json({ message: "Error during authentication." });
    }
    //no user with provided credentials there
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials." });
    }

    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login." });
      }
      return res.json(user);
    });
  })(req, res);
});

//logout route
//DELETE /api/auth/logout
router.delete("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successful logout." });
});

//check if the user has an active session (so that he will stay logged in)
//GET /api/auth/loggedin
router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
