const express = require("express");
const router = express.Router();
const Project = require("../models/PortfolioProject");
const User = require("../models/User");

// POST /portfolio
// create a new `portfolio` resource
router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const content = req.body.content;
  const updatedAt = req.body.updatedAt;
  const owner = req.body.owner;
  const type = req.body.type;
  console.log(req.body);

  Project.create({
    title,
    description,
    content,
    owner,
    type,
    updatedAt
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET /portfolio
router.get("/", (req, res) => {
  Project.find()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

//GET uer portfolio
router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  Project.find({ owner: id })
    .then(project => {
      console.log(project);
      res.status(200).json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/username/:username", (req, res) => {
  console.log("HERE");
  const username = req.params.username;
  User.findOne({ username: username })
    .then(user => {
      Project.find({ owner: user._id }).then(project => {
        console.log("PROJECTS ---->", project);
        res.json(project);
      });
      // res.status(200).json(user);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET /portfolio/:id
router.get("/project/:id", (req, res) => {
  Project.findOne({ _id: req.params.id })
    .then(project => {
      console.log(project);
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT portfolio/:id
router.put("/project/:id", (req, res) => {
  console.log("Proect:", req);
  const { title, description, content, type } = req.body;

  Project.findByIdAndUpdate(req.params.id, { title, description, content, updatedAt, type }, { new: true })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE portfolio/:id
router.delete("/project/:id", (req, res) => {
  // delete the project
  console.log("delete from router");
  Project.findByIdAndDelete(req.params.id)
    .then(project => {
      // Deletes all the documents in the Task collection where the value for the `_id` field is present in the `project.tasks` array
      return Task.deleteMany({ _id }).then(() => {
        res.json({ message: "Deleted" });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
