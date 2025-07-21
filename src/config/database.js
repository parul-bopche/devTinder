const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(
    
  "mongodb+srv://Parul123:Parul%40123@clusterparul.rxfir0f.mongodb.net/devTinder?retryWrites=true&w=majority&appName=ClusterParul"
);
};

module.exports = connectDB;
