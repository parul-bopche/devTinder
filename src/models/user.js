const mongoose= require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true, 
        minLength:4,
        maxLength:50, 
    },
    lastName: {
        type:String
    },
    emailId : {
        type:String,
        lowercase:true,
        required:true,
        unique:true, 
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address :"+value);
            }
        },
    },
    password: {
        type:String,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password :"+value);
            }
        },
    },
    age: {
        type:Number,
        min:18,
    },
    gender: {
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        },
    },
    photoUrl:{
        type:String,
        default :"https://randomuser.me/api/portraits/women/65.jpg",
       validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid photo url :"+value);
            }
        },
    },
    about:{
        type:String,
        default:"This is a default value",
    },
    skills:{
        type:[String],
    },
},{
    timestamps:true,
});

const User = mongoose.model("User",userSchema);
module.exports = User; 