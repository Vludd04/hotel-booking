const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    _id: { type: String, required: true },
    link: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("City", schema);
