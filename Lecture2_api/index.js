const express = require("express")
const app = express();
const PORT = 4000;

app.use(express.json());   // body parser 

app.get("/", (req,res)=>{      // this is api 
    // res.send("Server is live.");
    const result = {
        name:"nothing",
        work:null
    }
    res.json(result)         // here error will occur when you send request from browser beacuse multiple responses are posted
})

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("ok!!");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on the ${PORT} port.`);
})