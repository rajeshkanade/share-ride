const userModel = require("../models/user.model.js");
const userService = require("../services/user.service.js");

// use to check the validation of the user from the routes
const {validationResult} = require("express-validator");

module.exports.userRegister = async (req, res, next) => {
    console.log("user register controller");
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
        // return res.status(400).text("validation error");
    }

    const {fullname , email, password} = req.body;
    console.log(req.body);
    
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({firstname : fullname.firstname, lastname : fullname.lastname, email, password: hashedPassword});

    const token = user.generateAuthToken();

    res.status(201).json({token,user});
        

}