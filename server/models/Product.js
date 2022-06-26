const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },      // title of the product
        partId: { type: String, required: true, unique: true },     // ledgible 8 character id string for customers to use
        rating: {
            totalAvgRating: { type: Number },
            totalNumRatings: { type: Number },
            totalAnsweredQuestions: { type: Number}
        },
        desc: { type: String, required: true, unique: true },       // description of the product
        imgs: { type: Array },                                      // images & videos & models of the product
        categories: { type: Array },                                // categories the product is in
        family: {type: String},                                     // related to the product, products in the same family are great for cross-sales
        options: [
            {
                optionTitle: { type: String },                      // ex: 'color' or 'size'
                selectedOption: {type: Number},
                optionSelections: [                                 // the selections for that option for the product
                {
                    selection: {type: String },
                    selectionContentType: { type: String},
                    selectionContent: { type: String, default: null},
                    selectionPriceMultiplier: {type: Number, default: 1}                 // this could be a color code, or an image url, or anything that could be rendered as a background
                }
            ]
        }
    ],
        basePrice: { type: Number, required: true },                     // price of the product
        bulletDesc: { type: Array },                                // this is where bullet point items will be saved
        specs: {type: Array},                                       // this is where specs will be saved
        inStock:{type: Boolean, default: true},                      // whether the product is in stock
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);