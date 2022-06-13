const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        rating: { type: Number, required: true }, 
        reviewerName: { type: String, required: true },
        reviewerOrganization: { type: String },
        headline: { type: String, required: true },
        body: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);