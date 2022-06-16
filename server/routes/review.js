const router = require("express").Router();
const Review = require("../models/Review");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE RATING
router.post("/", verifyTokenAndAuth, async (req, res) => {

    const newReview = new Review(req.body)
    
    try {

        const savedReview = await newReview.save();
        res.status(200).json(savedReview);

    } catch (err) {

        res.status(500).json(err);

    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
    try {
       
       await Review.findByIdAndDelete(req.params.id);
        res.status(200).json("Review was successfully deleted");
        
    } catch (err) {
        
        res.status(500).json(err);
        
   } 
});

//GET REVIEWS BY PRODUCT
router.get("/fetch/:productId", async (req, res) => {
    try {
       
        const qNum = req.query.num
        const qFilter = req.query.filter
   
       const reviews = await Review.find({userId: req.params.userId});
       res.status(200).json(reviews);
   
   } catch (err) {

       res.status(500).json(err);
   
   } 
});

//GET ALL 
router.get("/fetch", verifyTokenAndAdmin, async (req, res) => {

    const qNum = req.query.num
   
    try {
        
        const reviews = await Review.find().limit(qNum? qNum : 1);
        res.status(200).json(reviews);

    } catch (err) {

        res.status(500).json(err);

    }

});

//GET STATS BY PRODUCT
router.get("/stats/:productId", async (req, res) => {

    const date = new Date();

    try {
        
        const income = await Review.aggregate([
            { $match: { createdAt: { $gte: prevMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);

    } catch (err) {

        res.status(500).json(err);

    }
});

//GET ALL STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {

    const date = new Date();

    try {
        
        const avdRating = await Review.aggregate([
            { $match: { createdAt: { $gte: prevMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(avgRating);

    } catch (err) {

        res.status(500).json(err);

    }
});

module.exports = router;