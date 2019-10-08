const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jobSchema = new Schema(
  {
    title: String,
    jobDescription: String,
    link: String,
    type: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Job = model("Job", jobSchema);

module.exports = Job;
