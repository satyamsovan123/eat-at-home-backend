const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new mongoose.Schema(
  {
    price: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Product", productSchema);
