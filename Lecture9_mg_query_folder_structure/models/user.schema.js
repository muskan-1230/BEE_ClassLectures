const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    //collection me data kis type ka hoga
    //attribute:type
    //name:String,
    name:{
        type:String,
        required:true, // makesit compulsory as without it can't create
        minLength:3,  // name can't be less than 3 character
        trim:true  //agr age piche extra spacedal de to remove kr dega
    },
    email:{
        type:String,
        required:true,
        unique:true //agr ek email use ho chuki hai vo dubara use nhi ho skti
    },
    age:{
        type:Number,
        min:1,  //min value below which user can't
        max:150,
    },
    DOB:{
        type:Date,

    }
});

//create collection
//it create collection in plural form
const user=mongoose.model("User",userSchema);
module.exports=user;
