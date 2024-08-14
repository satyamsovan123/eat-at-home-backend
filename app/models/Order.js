const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new mongoose.Schema(
  {
    user: { type: ObjectId, ref: "User" },
    status: { type: String, default: "pending" },
    cart: { type: ObjectId, ref: "Cart" },
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
orderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Order", orderSchema);
