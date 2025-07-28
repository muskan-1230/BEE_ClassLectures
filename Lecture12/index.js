const express = require("express");
const app = express();
PORT = 5000;

//router
const otpRouter = require("./routes/otp_router");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/otp", otpRouter);  

app.get("/",(req,res)=>{});

app.listen(PORT,()=>console.log("server running on port" + PORT));