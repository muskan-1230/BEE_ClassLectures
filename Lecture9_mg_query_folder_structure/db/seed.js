const User = require("../models/user.schema");

const dumyusers = [
    {
        name:"user1",
        email:"user1@gamil.com",
        age:18,
        DOB:new Date("04/07/2005")
    },
    {
        name:"user2",
        email:"user2@gamil.com",
        age:19,
        DOB:new Date("07/07/2006")
    },
    {
        name :"user3",
        email:"user3@gamil.com",
        age:18,
        DOB:new Date("07/12/2007")
    }
]

async function bulkUserUplaod() {
    try {
        let users= await User.insertMany(dumyusers);
        console.log("user uploads to db");
    } catch (error) {
        console.log(error.message);
        throw Error(error.message)           // with this error will be shown where this function is called as well not only in console.
        // duplicate key error shoud be there. 
        // this will return error or forward the error in the function.
    }
}

// bulkUserUplaod();
module.exports = bulkUserUplaod;
