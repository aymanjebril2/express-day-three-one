const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Brand = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("brands", Brand);
