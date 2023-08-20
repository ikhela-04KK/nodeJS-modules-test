import express from "express";
// import {TreeWalker} from "tree-file";


const app = express();
const port = 3000;

// TreeWalker("C:/Users/Administrateur/Documents/nodeJS-modules-test/4.5 BootstrapProject");

app.use(express.static("public"));


app.get("/", (req,res) =>{
    res.render("index.ejs");
})

app.post("/submit", (req, res) =>{
    res.render("sign-up.ejs")
});

// app.post("/submit/")
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





