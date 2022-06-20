const router = require("express").Router();
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE
router.post("/new", verifyTokenAndAdmin, async (req, res) => {

    console.log("product called");

    const newProduct = new Product(req.body)
    
    try {

        const savedProduct = await newProduct.save();
        console.log("product was saved");
        res.status(200).json(savedProduct);

    } catch (err) {

        res.status(500).json(err);
         
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch(err) {
        res.status(500).json(err + "");
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
   try {
       await Product.findByIdAndDelete(req.params.id);
       res.status(200).json("product was successfully deleted");
   } catch (err) {
       res.status(500).json(err);
   } 
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
       
        console.log("get product route called");
   
        const product = await Product.findById(req.params.id);
        console.log(product);
       res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(product);
   
   } catch (err) {

       res.status(500).json(err);
   
   } 
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {

    console.log("main products route called!")

    const qNew = req.query.new
    const qNum = req.query.num
    const qCategory = req.query.category

    qCategory ? console.log("category specified is: " + qCategory + " is of type: " + typeof qCategory) : console.log("no category specified");

    try {

        const products = qNew ? await Product.find().sort({ createdAt: -1 }).limit(qNum ? qNum : 4) : 
            
            qCategory ? await Product.find({
                categories: {
                $in:[qCategory], 
                },
            }).sort({ createdAt: -1 }).limit(qNum ? qNum : 4) :
                
                await Product.find().limit(qNum ? qNum : 4);
        
        res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(products);
        
    } catch (err) {
        
        res.status(500).json(err); 
        
   } 
});

module.exports = router;