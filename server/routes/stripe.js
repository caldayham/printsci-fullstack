const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_PRINTSCI_TEST_SEC);

router.post("/payment", (req, res) => {
    console.log("next is req.body");
    console.log(req.body);
console.log(process.env.STRIPE_PRINTSCI_TEST_SEC);

    stripe.charges.create(
        {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
        }, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
                console.log("there was an error in the stripe route, oof") 
                console.log(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;