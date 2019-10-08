const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.post("/", (req, res) => {
  const title = req.body.title;
  const jobDescription = req.body.jobDescription;
  const link = req.body.link;
  const type = req.body.type;
  const updatedAt = req.body.updatedAt;
  console.log(req.body);

  Job.create({
    title,
    jobDescription,
    link,
    type,
    updatedAt
  })
    .then(job => {
      res.json(job);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  Job.find()
    .then(job => {
      res.json(job);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/job/:id", (req, res) => {
  Job.findOne({ _id: req.params.id })
    .then(job => {
      console.log(job);
      res.json(job);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/job/:id", (req, res) => {
  console.log("Job:", req);
  const { title, jobDescription, link, type, updatedAt } = req.body;

  Job.findByIdAndUpdate(req.params.id, { title, jobDescription, link, type, updatedAt }, { new: true })
    .then(job => {
      res.json(job);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/job/:id", (req, res) => {
  console.log("delete from router");
  Job.findByIdAndDelete(req.params.id)
    .then(job => {
      return Task.deleteMany({ _id }).then(() => {
        res.json({ message: "Deleted" });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
