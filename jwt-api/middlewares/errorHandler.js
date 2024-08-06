const status =require("http-status-codes")
const{StatusCodes}=status
const UnauthenticatedError=require("./unauthenticatedError")
const CustomError = require("./customError")


const errorHandler = async (err,req,res,next)=>{

    if(err instanceof UnauthenticatedError){
        res.status(StatusCodes.UNAUTHORIZED).json({msg:err.message})
    }

    if( err instanceof CustomError){
        res.status(StatusCodes.BAD_REQUEST).json({msg: err.message})
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Error in the server"})
}

module.exports=errorHandler