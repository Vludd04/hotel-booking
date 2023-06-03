const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    _id: { type: String, required: true },
    hotelID: { type: String, required: true },
    hotelName: { type: String, required: true },
    isFree: { type: Boolean, required: true },
    city: { type: String, required: true },
    name: { type: String, required: true },
    facilities: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Room", schema);
