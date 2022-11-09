const express=require("express");
const router=express.Router();
const userController=require("../controller/UserController");


router.post("/signup",userController.userSignup);
router.post("/signin",userController.userSignin);






module.exports=router;