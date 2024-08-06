const UnauthenticatedError = require("./unauthenticatedError")
const jwt =require("jsonwebtoken")

const authentication = async (req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new UnauthenticatedError("Not authorized to access route")
    }

    const token = authHeader.split(" ")[1]
    try{
    const decode = jwt.verify(token,process.env.JSON_STRING)

    const{id,username}=decode
    req.user={id,username}
    next()
    }catch(err){
        throw new UnauthenticatedError("not authorized to acces this route")
    }

}

module.exports=authentication