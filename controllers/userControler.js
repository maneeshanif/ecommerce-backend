const userModel = require("../models/userModel");


exports.showUsers = (req,res) => {
    res.send({
        name:"anees",
        email:"manees@gmail.com",
        password:"12345"
    })
}


exports.createUsers = async (req,res) => {
    const {name,email,password} = req.body;
    const newUser =  new  userModel({
        name,
        email,
        password
    }) 
   await  newUser.save();
    res.status(201).json({message:"user created successfully"})
};


exports.allusers = async (req,res) => {
       let users = await userModel.find();
       res.send(users)
}