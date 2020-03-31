/** @format */

const mongoose = require("mongoose");
const schema = mongoose.Schema;

let productSchema = new schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  price: {
    type: Number,
    require: true,
    trim: true
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  description: {
    type: String
  }
});
module.exports = mongoose.model("Product", productSchema);
