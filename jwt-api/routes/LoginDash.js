const express = require("express")
const router = express.Router()
const{login,dashboard}=require("../controllers/LoginDash")
const authentication= require("../middlewares/authentication")

router.route("/login").post(login)
router.route("/dashboard").get(authentication,dashboard)

module.exports=router