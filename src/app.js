const express = require('express');
const app = express(); 
//request handler-make multiple
app.use("/test",(req,res)=>{
    res.send("hello from the server!");
});
app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000..");
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