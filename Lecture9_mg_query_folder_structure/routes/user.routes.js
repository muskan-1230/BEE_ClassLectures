const express= require("express");
const router = express.Router();
// we use router becauise we dont have app to use here , we cant define app again here and also we cant use th index app 

router.post("/create",async (req,res)=>{
    try{
        const{name,email,age,DOB}=req.body;
        const user = await User.create({
            name:name,
            email:email,
            age:age,
            DOB:new Date(DOB)
        });
        res.status(201).json({user});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

router.get("/bulk/upload",async(req,res)=>{
    try {
        await bulkUserUplaod();
        res.status(200).json({message:"users upload successful :)"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

module.exports= router;
// beacuse there are more than one api to export so the router will be an object(kind of) or like a function




/*

we have middleware in index.js ->
app.use("/user",userRouter); 

in user.routes.js->
router.post("/user/create",async (req,res)=>

    when we have req from client on index,js (entry point) 
    it travels to the userRouter function that we have passed in the middleware
    we have defined routers , we have already checked /users from the middleware , 
    so now the type of req will be chcked thta is post or gte and after that /create will be checked and so we dont need to write /user in this file.
    we need to track the req (entry->travel->end)
*/