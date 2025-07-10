function verifyUser(req,res,next){
    console.log("user verified");
    next();
}


const genericMiddleware= (req,res,next)=>{
    console.log("Generic middleware 1");
    next();
}

const pathSpecefic = (req,res,next)=>{
    console.log("Path specefic middleware");
    next();
}


module.exports = {verifyUser,genericMiddleware,pathSpecefic}











