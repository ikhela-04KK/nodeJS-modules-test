//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";



const truePassword = process.env.TRUE_PASSWORD;
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3007;

//intialisation des middlewares 
app.use(bodyParser.urlencoded({ extended: true }));

// function qui reçoit le mot de passe rentré et qui vérifie s'il concorde pas : on passe par le middleware pour reccuperer le mot de passe de l'utilisateur 
let userPass;
function verifPassword(req, res, next) {
    userPass = req.body.password || "";
    next();
}
app.use(verifPassword);


// intialisation des routes pour les requêtes 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (truePassword === userPass) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/")
    };
});

app.listen(port, () => {
    console.log(`listenning to port ${port}`);
});