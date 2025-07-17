const express = require("express");
const app = express();
const PORT=4000;
const {MongoClient} = require("mongodb");
require("dotenv").config();

//middleware
app.use(express.json());

const client = new MongoClient(process.env.DATABASE_URL);
let userCollection;
async function main(){
  await client.connect();
  const db = client.db("G24");
  userCollection = db.collection("users");
  return "done";
}

app.get("/user",async(req,res)=>{
    // const {name,email} = req.query;                       // destructure
    // const result = await userCollection.insertOne({name,email});                //  insert data thta is a object conat8ning name and email by the user
    // res.status(201).json({result});                            // respinse is being send to the user to confirm thta the req is done , result is send in the json format.
    // ERROR PRONE=> data is wrong format, env file wrong
    // to resolve this -> use try catch to avoid error 
    // insert is time taking process in this code, await la kam -> res.status tb tk run nhi hogi jb tk insert wali line run nhi hogi 

    try {
        const {name,email} = req.query;
        const result = await userCollection.insertOne({name,email});
        res.status(201).json({result});   
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})

//
app.post("/users",async (req,res)=>{
    try{
        const{users} = req.body;
        const result = userCollection.insertMany(users);
        res.status(201).json({result});
    }catch(error){
        res.status(400).json({message:error.message})
    }
})

app.delete("/user/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await userCollection.deleteOne({_id:id});
        res.status(203).json({result,message:"user deleted successfully"});
} catch (error) {
        res.status(400).json({message:error.message});
    }
})

app.listen(PORT,()=>{
  main().then(()=>console.log("db connected"))
  .catch((err)=>console.log(err));
  console.log(`server live on ${PORT}`);
})