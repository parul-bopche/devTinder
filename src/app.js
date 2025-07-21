const express = require('express');
const connectDB = require("./config/database");
const app = express(); 

const User = require("./models/user");
//request handler-make multiple
// app.use("/",(req,res)=>{
//     console.log("namaste parul");
// });
// app.get("/hello",(req,res)=>{
//     res.send("hello!");
// });//hello/123 same
// app.get("/test",(req,res)=>{
//     res.send("hello from the server!");
// });
// app.get("/",(req,res)=>{
//      console.log("namaste parul");
//  });

// app.get("/user",(req,res)=>{
//     res.send({firstName : "parul", lastName:"bopche"});
// });

//  
app.use(express.json());
app.post("/signup",async(req,res)=>{
    console.log(req.body);
    const user = new User(req.body);
    try{
    await user.save();
    res.send("user added successfully");
    }catch(err){
        res.status(400).send("error saving the user:"+ err.message);
    }
    
});

app.get("/user",async(req,res)=>{
    const userEmail = req.body.emailId;
    try{
        const users = await User.find({emailId:userEmail});
        if(users.length===0){
            res.status(404).send("User not found");
        }else{
            res.send(users);
        }
       
    }catch(err){
        res.status(400).send("Something went wrong");
    }
});

app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        res.status(400).send("Something went wrong");
    }
});

app.delete("/user",async(req,res)=>{
    console.log("BODY:", req.body);
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send("User deleted successfully");
    }catch(err){
        res.status(400).send("Something went wrong");
    }
});

app.patch("/user/:userId",async(req,res)=>{
    const userId = req.params?.userId;
    const data = req.body;
    
    // console.log(data);
    try{
        const ALLOWED_UPDATES = [
        "photoUrl","about","gender","age","skills",
    ];
    const isUpdateAllowed = Object.keys(data).every((k)=>
      ALLOWED_UPDATES.includes(k)
    );
    if(!isUpdateAllowed){
        throw new Error("update not allowed");
    }
    if(data?.skills.length>10){
        throw new Error("skills cannot be more than 10");
    }
       const user =  await User.findByIdAndUpdate({_id:userId},data,
        {returnDocument : "after"},
        {runValidators:true,});

       console.log(user); 
        res.send("user updated successfully");
    }catch(err){
        res.status(400).send("something went wrong error"+ err.message);
    }
});

connectDB().then(()=>{
    console.log("database connection established");
    app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000..");
});
}).catch(err=>{
    console.error("database cannot be established");
});


//create a repository
//initialize the repository
//node_modules,package.json,package-lock.json
//install express
//create a server
//listen to port 777
//write request handlers for /test ,/hello
//install nodemon and update scripts inside package.json
//dependencies
//what is -g
//diff btn ^ ans ~

//initialize git
//.gitignore
//create a remote repo on github
//push all  code to remote origin
//order of routes imp play with routes