const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String },
    zipCode: { type: String },
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", userSchema);
