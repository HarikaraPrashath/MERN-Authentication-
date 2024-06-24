const express= require('express')

//controller function 
const {signupUser,loginUser} =require('../controllers/userController.js')

const router = express.Router()

//login 
router.post('/login',loginUser)

//sign up
router.post(('/signup'),signupUser)

module.exports=router