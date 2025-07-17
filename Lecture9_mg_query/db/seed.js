const User = require("../models/user.schema");

const dumyusers = [
    {
        name:"user1",
        email:"user1@gamil.com",
        age:18,
        DOB:new Date("17/07/2005")
    },
    {
        name:"user2",
        email:"user2@gamil.com",
        age:19,
        DOB:new Date("17/07/2006")
    },
]

async function bulkUserUplaod() {
    try {
        let users= await User.insertMany();
        console.log("user uploads to db");
    } catch (error) {
        console.log(error.message);
    }
}