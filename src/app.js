const express = require('express');
const app = express(); 
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

app.get("/user",(req,res)=>{
    res.send({firstName : "parul", lastName:"bopche"});
});

app.post("/user",(req,res)=>{
    res.send("save data to the database");
});
app.delete("/user",(req,res)=>{
    res.send("delete data to the database");
});
//this will match all thr http method api calls to /test
app.use("/test",(req,res)=>{
    res.send("hello from the server");
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

//initialize git
//.gitignore
//create a remote repo on github
//push all  code to remote origin
//order of routes imp play with routes