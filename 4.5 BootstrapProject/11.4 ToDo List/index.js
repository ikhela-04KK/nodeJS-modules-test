import express from "express";
// import {TreeWalker} from "tree-file";
// import bodyParser from "body-parser";
import multer from "multer"


const app = express();
const upload = multer();
const port = 3000;

// TreeWalker("C:/Users/Administrateur/Documents/nodeJS-modules-test/4.5 BootstrapProject");
// app.use(bodyParser.urlencoded({extended : true})); 
app.use(express.static("public"));

// j'initialise le middleware afin de recuperer les informations sur le post 
// app.use(bodyParser.json())



app.get("/", (req,res) =>{
    // console.log(req.body);
    res.render("index.ejs");
})

app.post("/sign-in", (req, res) =>{
    // console.log(req.body);
    res.render("sign-up.ejs")
});

// Renvoyer le nom de fichier directement à features.ejs


app.post("/connected", upload.single('userImage'), (req,res,next) =>{
    console.log(req.file.originalname);
    console.log(req.body);
    const userImage = req.file.originalname;
    const data ={
        userImage: `images/${userImage}`,
    };
    res.render("features.ejs",data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





