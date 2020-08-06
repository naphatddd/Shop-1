const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: "nopic.png" },
    location: {
      type: {
        lat: Number,
        lgn: Number,
      },
    },
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
    collection: "shops",
  }
);
schema.virtual("menus", {
  ref: "Menu",
  localField: "_id",
  foreignField: "shop",
});
const shop = mongoose.model("Shop", schema);

module.exports = shop;
