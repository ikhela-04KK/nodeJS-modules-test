import express from "express"; 

const app = express(); 
app.use((req,res,next)=>{
    console.log("\nALLWAYS");
    next();
});
app.get("/a",(req,res)=>{
    console.log("/a: route terminated");
    res.send("a");
});
app.get("/a",(req,res)=>{
    console.log("/a: never called");
    // next();
});
app.get("/b",(req,res,next)=>{
    console.log("/b: route not terminated");
    next();
});
app.use((req,res,next)=>{
    console.log("SOMETIMES");
    next();
});
app.get("/b",(req,res,next)=>{
    console.log("/b (part 2): error thrown");
    throw new Error('b failed');
});
app.use('/b',(err,req,res,next)=>{
    console.log("/b error detected and passed on");
    next(err);
});
app.post("/c",(err,req)=>{
    console.log("/c: error thrown");
    throw new Error('c failed');
});
app.use((err,req,res,next)=>{
    console.log("/c: error detected but not passed on");
    next();
});
app.use((req,res)=>{
    console.log("route not handled");
    res.send('404 -not found ');
});
app.listen(3000, ()=>{
    console.log("listening on 3000");
});