const express = require("express");

const app = express();

app.use(express.json()) //global middleware

// let's write a function and make it work as a middleware

//we want to keep a counter of how many times our route got hit
let cnt = 0;
function reqLogger(req, res, next) {
    cnt += 1;
    console.log("request no: ", cnt, "at path", req.path, "method ", req.method);
    //we can also manipulate the req object
    req.developerName = "Pritam";
    
    //can we also manipulate the res object???
    res.whoami = "Pritam modified the response as well" //don't do this in real
    next(); //pass on the control

    //IMP: A middleware should pass control forward, return a response, or return an error.
}


app.use(reqLogger)  //now it will work as global middleware for all the routes written below

app.get("/",(req, res) => {
    console.log(req.developerName)
    res.send("hello there...")
})
app.get("/about",(req, res) => {
    res.send("hello there it's the about page by", JSON.stringify(res.whoami));
    console.log(res.whoami);
});





app.listen(3000, ()=> {console.log("Running")})