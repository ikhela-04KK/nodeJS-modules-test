import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

/*import { dirname } from "path"; : Cela importe la fonction dirname du module Node.js "path". dirname est une fonction qui renvoie le nom du répertoire d'un chemin de fichier.

*import { fileURLToPath } from "url"; : Cela importe la fonction fileURLToPath du module Node.js "url". fileURLToPath est une fonction qui convertit une URL de type file: en un chemin de fichier local.
*
*const __dirname = dirname(fileURLToPath(import.meta.url)); : Cette ligne utilise les deux fonctions précédemment importées pour obtenir le chemin du répertoire du fichier en cours d'exécution. Voici comment cela fonctionne :

  *import.meta.url renvoie l'URL du module en cours d'exécution.
  *fileURLToPath(import.meta.url) convertit cette URL en un chemin de fichier local.
  *-dirname(fileURLToPath(import.meta.url)) renvoie le nom du répertoire de ce chemin de fichier
*/
const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//* corrigé: initialisation de la fonction brandNameGenerator
let brandName = "";
function brandNameGenerator(req,res, next) {
  console.log(req.body);
  brandName = req.body.street + req.body.pet;
  next();
}
//*un middleware pour affihcier les resultats sous forme d'objets js 
//* Corrigé: je devais utiliser use pour mettre en place le middleware
app.use(brandNameGenerator); 

////let url_parser = bodyParser.urlencoded({extended: true});
app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/public/index.html");
});

////app.post("/submit", url_parser,(req, res) =>{
app.post("/submit",(req, res) =>{
  // //console.log("voilà: ", req.body.street);
  ////res.send(`<h1> BRAND NAME GENERATOR</h1><br><h2>${req.body.street}${req.body.pet}🧡✌️</h2>`);
  res.send(`<h1> BRAND NAME GENERATOR</h1><h2>${brandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
