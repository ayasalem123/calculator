const express = require('express');
const { append } = require('vary');
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("main.ejs")
})
router.use("/result",(req,res)=>{
    console.log("hi")
    console.log(req.body)
    // res.send({result:eval(req.body.firstvalue+req.body.operator+req.body.secondvalue)})
    res.render("result.ejs",{req:req})
})

module.exports = router;