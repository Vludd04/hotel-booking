const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    stars: { type: Number, required: true },
    cityName: { type: String, required: true },
    description: { type: String, required: true },
    highlights: [{ type: String, required: true }],
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Hotel", schema);
