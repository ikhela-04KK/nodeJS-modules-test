// import express from "express"; 
import express from "express";

const router = express.Router();

router.get("/blog",(req,res)=>{
    res.send('Get route on things');
})

// don't forget the / while make a route
router.get("/blog/:num",(req,res)=>{
    res.send('the id yyou specified is '+ req.params.num);
});
router.get("/contact", (req, res)=>{
    // console.log("succeffuk")
    res.send('Get route on contact')
})
// very complex path parameters and dynamics routes
router.get("/contact/:name/:id",(req,res)=>{
    res.send(`your name : ${req.params.name} 
                your id: ${req.params.id}`)
})

// make pattern matched Routes for matcing with five number as id 
router.get("/:id([0-9]{5})", (req,res)=>{
    res.send('id: '+ req.params.id);
})

// replace 404 get request 
router.get("*", (req,res)=>{
    res.send("<h1>ERROR</h1>");
})

// exports this router 
// module.exports = "./about.js"
export const about = router;
