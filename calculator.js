const express=require("express")
const app=express();
app.set('view engine','ejs');
const routes=require("./routes")
app.use(routes)
app.listen(3002)