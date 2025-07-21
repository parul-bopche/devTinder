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
        default:"data:image/png;base64,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",
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