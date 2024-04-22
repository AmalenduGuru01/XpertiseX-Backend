// const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
//     key_id : process.env.RAZORPAY_KEY,
//     key_secret : process.env.RAZORPAY_SECRET,
// })

var Razorpay = require("razorpay");

var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});

exports.instance = instance;
