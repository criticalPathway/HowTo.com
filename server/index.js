const express = require('express');
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");

// internal import
const productRoutes=require("./routes/productRoutes")
const stripeRotues=require("./routes/stripe")
const orderRoutes=require("./routes/order")
const authRoutes=require("./routes/authRoutes")

const app = express();

// dot env endables
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());



// bypass api
app.use("/api/products",productRoutes);
app.use("/api/stripe",stripeRotues)
app.use("/api/orders",orderRoutes);
app.use("/api/auth",authRoutes);

// database configuration
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("connected to database");
})
.catch((err)=>{
  console.log(err);
});


//listen server
app.listen(4000, (req, res) => {
    console.log("server is running on port 4000");
});