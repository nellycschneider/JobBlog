const express = require("express");
const router = express.Router();
const CVModel = require("../models/CVModel");

router.post("/", (req, res) => {
  const {
    name,
    email,
    phone,
    linkedin,
    github,
    skills,

    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,

    exp2_org,
    exp2_pos,
    exp2_desc,
    exp2_dur,

    proj1_title,
    proj1_link,
    proj1_desc,

    proj2_title,
    proj2_link,
    proj2_desc,

    edu1_school,
    edu1_year,
    edu1_qualification,
    edu1_desc,

    edu2_school,
    edu2_year,
    edu2_qualification,
    edu2_desc,

    extra_1,
    extra_2,
    extra_3,
    extra_4,
    extra_5
  } = req.body;
  //   const owner = req.user._id;

  CVModel.create({
    name,
    email,
    phone,
    linkedin,
    github,
    skills,

    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,

    exp2_org,
    exp2_pos,
    exp2_desc,
    exp2_dur,

    proj1_title,
    proj1_link,
    proj1_desc,

    proj2_title,
    proj2_link,
    proj2_desc,

    edu1_school,
    edu1_year,
    edu1_qualification,
    edu1_desc,

    edu2_school,
    edu2_year,
    edu2_qualification,
    edu2_desc,

    extra_1,
    extra_2,
    extra_3,
    extra_4,
    extra_5
    // owner: owner
  })
    .then(cv => {
      res.json(cv);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/all", (req, res) => {
  CVModel.find()
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
    email,
    phone,
    linkedin,
    github,
    skills,

    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,

    exp2_org,
    exp2_pos,
    exp2_desc,
    exp2_dur,

    proj1_title,
    proj1_link,
    proj1_desc,

    proj2_title,
    proj2_link,
    proj2_desc,

    edu1_school,
    edu1_year,
    edu1_qualification,
    edu1_desc,

    edu2_school,
    edu2_year,
    edu2_qualification,
    edu2_desc,

    extra_1,
    extra_2,
    extra_3,
    extra_4,
    extra_5
  } = req.body;

  CVModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      phone,
      linkedin,
      github,
      skills,

      exp1_org,
      exp1_pos,
      exp1_desc,
      exp1_dur,

      exp2_org,
      exp2_pos,
      exp2_desc,
      exp2_dur,

      proj1_title,
      proj1_link,
      proj1_desc,

      proj2_title,
      proj2_link,
      proj2_desc,

      edu1_school,
      edu1_year,
      edu1_qualification,
      edu1_desc,

      edu2_school,
      edu2_year,
      edu2_qualification,
      edu2_desc,

      extra_1,
      extra_2,
      extra_3,
      extra_4,
      extra_5
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

router.get("/:id", (req, res) => {
  CVModel.findById(req.params.id)
    .then(cv => {
      if (!cv) {
        res.status(404).json(cv);
      } else {
        res.json(cv);
      }
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  CVModel.findByIdAndDelete(id)
    .then(cv => {
      return CV.findByIdAndUpdate(cv.project, {
        $pull: { cv: id }
      }).then(() => {
        res.json({ message: "ok" });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;