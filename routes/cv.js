const express = require("express");
const router = express.Router();
const CV = require("../models/CV");

router.post("/", (req, res) => {
  const {
    name,
    summary,
    skills,
    email,
    address,
    phoneNumber,
    experienceTitle,
    experienceDescription,
    educationTitle,
    educationDate,
    educationDescription,
    interests
  } = req.body;
  //   const owner = req.user._id;

  CV.create({
    name,
    summary,
    skills,
    email,
    address,
    phoneNumber,
    experienceTitle,
    experienceDescription,
    educationTitle,
    educationDate,
    educationDescription,
    interests
    // owner: owner
  })
    .then(cv => {
      res.json(cv);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  CV.find()
    .then(cv => {
      res.json(cv);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  const {
    name,
    summary,
    skills,
    email,
    address,
    phoneNumber,
    experienceTitle,
    experienceDescription,
    educationTitle,
    educationDate,
    educationDescription,
    interests
  } = req.body;

  CV.findByIdAndUpdate(
    req.params.id,
    {
      name,
      summary,
      skills,
      email,
      address,
      phoneNumber,
      experienceTitle,
      experienceDescription,
      educationTitle,
      educationDate,
      educationDescription,
      interests
    },
    // { new: true } ensures that we are getting the updated document in the .then callback
    { new: true }
  )
    .then(cv => {
      res.json(cv);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
