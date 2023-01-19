const bodyParser = require("body-parser");
const express=require("express")
const app=express();
app.set('view engine','ejs');
const routes=require("./routes")
app.use(bodyParser.urlencoded({extended:false}))
app.use(routes)

app.listen(3002)