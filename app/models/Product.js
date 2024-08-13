const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    productPrice: { type: String, required: true },
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", userSchema);
