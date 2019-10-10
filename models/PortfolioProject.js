const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    content: [
      {
        imgDescription: String,
        img: String
      }
    ],
    type: ""
  },
  {
    timestamps: true
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;
