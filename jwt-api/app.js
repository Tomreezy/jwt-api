const express =require("express")
const app = express()
require("dotenv").config()
require("express-async-errors")
const IndexRoutes = require("./routes/LoginDash")
const errorHandler= require("./middlewares/errorHandler")





//middleware start
app.use(express.json())


//middleware middle
app.use("/v1/jwt",IndexRoutes)


//middleware end
app.use(errorHandler)

//start server

app.listen(3000,()=> console.log("server is up"))