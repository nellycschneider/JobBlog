const express = require("express");
const router = express.Router();
const Project = require("../models/PortfolioProject");

// POST /portfolio
// create a new `portfolio` resource
router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const content = req.body.content;
  const updatedAt = req.body.updatedAt;
  console.log(req.body);

  Project.create({
    title,
    description,
    content,
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
  const { title, description, content } = req.body;

  Project.findByIdAndUpdate(req.params.id, { title, description, content, updatedAt }, { new: true })
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
