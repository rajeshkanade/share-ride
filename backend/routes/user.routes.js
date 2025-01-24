const express = require("express");
const router = express.Router();
const {body} = require("express-validator")
const userController = require("../controllers/user.controller");

router.post("/register",[
    // add the validation here
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body("fullname.firstname").isLength({min : 3}).withMessage("First name must be 3 character long"),
    body("password").isLength({min : 6}).withMessage("password must be 6 character long"),
],userController.userRegister)


router.post("/login",[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body("password").isLength({min : 6}).withMessage("password must be 6 character long"),
],userController.userLogin)


module.exports = router;