const express = require("express")
const app = express();
const PORT = 5000;
const path = require("path");


app.use(express.json());   // body parser 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));    // static - to redirect to the public folder if any req comes to the home route.
// path.join -> provide absolute path of public 

// home route should be get req not any other or else it will not get redirected.

app.get("/", (req,res)=>{  })   
// this api is useless , will not run because we redirected it , but if in the public folder ondex.html file is not found then it will run.

app.get("/user",(req,res)=>{
    let user={
        name:"user 1",
        age:21,
        branch:"CSE",
    }
    res.status(200).json({user});     // we use object here in json format 
})

app.get("/contact")
app.listen(PORT, ()=>{
    console.log(`Server is running on the ${PORT} port.`);
})

