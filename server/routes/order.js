// expernal import
const express = require("express");
const { Order } = require("../model/orderModel");

// router
const router = express.Router();

router.get("/",async(req, res) => {
  try {
    const order=await Order.find({});
    res.status(200).json(order);
  } catch (err) {}
});

module.exports = router;
