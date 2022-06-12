const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DBConnection Successfull!")).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/users", userRoute); 
app.use("/api/auth", authRoute); 

app.listen(process.env.PORT || 5000, () => {
    console.log(`backend server is running on port ${process.env.PORT || 5000}`); 
});