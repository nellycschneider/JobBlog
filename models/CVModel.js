const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cvSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  skills: String,

  exp1_org: String,
  exp1_pos: String,
  exp1_desc: String,
  exp1_dur: String,

  exp2_org: String,
  exp2_pos: String,
  exp2_desc: String,
  exp2_dur: String,

  proj1_title: String,
  proj1_link: String,
  proj1_desc: String,

  proj2_title: String,
  proj2_link: String,
  proj2_desc: String,

  edu1_school: String,
  edu1_year: String,
  edu1_qualification: String,
  edu1_desc: String,

  edu2_school: String,
  edu2_year: String,
  edu2_qualification: String,
  edu2_desc: String,

  extra_1: String,
  extra_2: String,
  extra_3: String,
  extra_4: String,
  extra_5: String,

  owner: { type: Schema.Types.ObjectId, ref: "User" }
});

const CVModel = model("CVModel", cvSchema);

module.exports = CVModel;
