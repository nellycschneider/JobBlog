const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cvSchema = new Schema({
  name: String,
  summary: String,
  skills: String,
  email: String,
  address: String,
  phoneNumber: Number,
  experienceTitle: String,
  experienceDescription: String,
  educationTitle: String,
  educationDate: String,
  educationDescription: String,
  interests: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" }
});

const CV = model("CV", cvSchema);

module.exports = CV;
