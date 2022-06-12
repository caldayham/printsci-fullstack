const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, unique: true },
        mainImg: {type: String, required: true },
        imgs: { type: Array },
        categories: { type: Array},
        size: { type: String },
        material: { type: String },
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);