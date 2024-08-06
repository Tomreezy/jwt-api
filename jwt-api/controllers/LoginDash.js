const jwt = require("jsonwebtoken")
const CustomError = require("../middlewares/customError")
const{StatusCodes}=require("http-status-codes")


const login =async (req,res)=>{
    
    const{username,password}=req.body

    if(!username || !password){
        throw new CustomError("please enter all input")
    }

    const id = new Date().getDate()

    console.log(req.body)
    const token = jwt.sign({id,username},process.env.JSON_STRING,{"expiresIn":"30d"})
    res.status(StatusCodes.ACCEPTED).json({msg:"succesfully created",token})
}


const dashboard = async (req,res)=>{
    
    res.status(StatusCodes.ACCEPTED).json({data:req.user})
}

module.exports={
    login,
    dashboard
}