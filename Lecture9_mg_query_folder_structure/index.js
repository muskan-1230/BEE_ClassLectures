const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const connectDB=require("./db/connectDB");
const User = require("./models/user.schema");
const bulkUserUplaod = require('./db/seed');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("dotenv").config();

// routers->
const userRouter =  require("./routes/user.routes");

app.use("/user",userRouter);   // middleware 



// app.post("/user/create",async (req,res)=>{
//     try{
//         const{name,email,age,DOB}=req.body;
//         const user = await User.create({
//             name:name,
//             email:email,
//             age:age,
//             DOB:new Date(DOB)
//         });
//         res.status(201).json({user});
//     }catch(error){
//         res.status(400).json({message:error.message});
//     }
// })

// app.get("/user/bulk/upload",async(req,res)=>{
//     try {
//         await bulkUserUplaod();
//         res.status(200).json({message:"users upload successful :)"});
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })    

// we dont need thses beacuse we have importes router 


app.get('/',(req,res)=>{ });

connectDB().then(()=>{
    app.listen(PORT,()=>
    console.log("server is live ${PORT}"));
})
.catch((error)=>console.log("error"))