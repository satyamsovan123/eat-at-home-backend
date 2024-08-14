const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongoosePaginate = require("mongoose-paginate-v2");

const cartSchema = new mongoose.Schema(
  {
    user: { type: ObjectId, ref: "User" },
    products: [
      {
        product: { type: ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);
cartSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Cart", cartSchema);
