const express =require("express")
const app = express()
const PORT = 4000;

app.get("/user",(req,res)=>{
    // console.log(req.query);
    // console.log(req.query.name);
    // console.log(req.query.number); 

    const {name} = req.query;      // this is called destructuring of object 
    console.log(name);

    res.status(200).send("ok!!")
})

app.get("/user/:id",(req,res)=>{           // this is an api, just this much code makes you api :) 
    // console.log(req.params);  // [Object: null prototype] { id: '2005' }
    const {id} = req.params;
    console.log(id);
    res.send("ok!");
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