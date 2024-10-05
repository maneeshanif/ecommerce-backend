const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecommerce").then(()=>{
    console.log("database connected");
    })

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const userModel = mongoose.model("user",userSchema)

module.exports =userModel
