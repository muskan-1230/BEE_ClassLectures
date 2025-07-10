const {verifyUser,genericMiddleware,pathSpecefic} = require("./Middleware/practice.middleware.js")

const express =require("express")
const app = express()
const PORT = 4000;

// app.use((req,res,next)=>{
//     console.log("Generic middleware 1");
//     next();
// })
app.use(genericMiddleware);

// app.use("/user",(req,res,next)=>{
//     console.log("Path specefic middleware");                  // this will run for only those api req which starts with /user.
//     next();
// })
app.use(pathSpecefic);

// API's / rputes specefic middleware
// function verifyUser(req,res,next){
//     console.log("user verified");
//     next();
// }


app.get("/",verifyUser,(req,res)=>{
    console.log("/home api\n.");
    res.json({message:"Server is live!"});
})

// app.get("/",verifyUser,(req,res,next)=>{
//     console.log("/home api\n.");
//     res.json({message:"Server is live!"});
//     next();
// })

// app.get("/",(req,res)=>{
//     console.log("/home api 2 \n.");
//     res.json({message:"Server is live!22"});    // this will stuck beacuse next is not called and also two responses are being send from above req and this one 
// })

app.get("/user",(req,res)=>{
    console.log("/user api\n.");
    res.send("user api working")
})

app.listen(PORT,()=>{
    console.log(`Server is live on ${PORT}`);
})


/*
200
201
403
404
500
*/