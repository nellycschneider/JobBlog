const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    content: String
    //owner: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
