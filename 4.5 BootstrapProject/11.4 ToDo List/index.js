import express from "express";
import multer from "multer"

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const upload = multer();
const port = 3000;

// const newTasks = [];
// TreeWalker("C:/Users/Administrateur/Documents/nodeJS-modules-test/4.5 BootstrapProject");
// app.use(bodyParser.urlencoded({extended : true})); 
// app.use(express.static(__dirname +'/dist'), {index:false}); 
app.use(express.static("public"));
app.use('/sign-in', express.static('public'));

// j'initialise le middleware afin de recuperer les 
app.get("/", (req,res) =>{
    res.render("index.ejs");
})

app.post("/sign-in", (req, res) =>{
    res.render("sign-up.ejs")
});

let userData = {};
let allTaskUser = [];

// Renvoyer le nom de fichier directement à features.ejs
app.post("/sign-in/connected", upload.single('userImage'), (req, res) => {

    const email = req.body.email;
    const nameUser = email.split("@")[0];
    const userImage = req.file.originalname;
    console.log(userImage)
    userData = {
        userImage: `images/${userImage}`,
        nameUser: nameUser,
    };
    res.render("features.ejs", userData);
});


// renvoie la tâche que l'utilisateur à ajouter
// Route pour ajouter une tâche à l'utilisateur connecté
app.post("/sign-in/connected/add-task",upload.none(), (req, res) => {
    console.log(req.body);

    // display hour 
    const date = new Date(); 
    const heureDate = `${date.getHours()}:${date.getMinutes()}`
    userData.heureDate = heureDate;

    // for stask 
    const taskUser = req.body.taskUser;
    allTaskUser.push(taskUser)
    console.log(allTaskUser);

    // oldTaskUser = 
    userData.taskUsers = allTaskUser;

    //  est ce que je peux faire userData.taskUser = 
    res.redirect("/sign-in/connected");

});


app.get("/sign-in/connected", (req, res) => {
    res.render("features.ejs", userData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});