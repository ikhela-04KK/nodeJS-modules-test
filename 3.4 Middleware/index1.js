import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Middleware pour analyser les données encodées en URL et de les convertir en object en javascript
app.use(bodyParser.urlencoded({ extended: true }));

// requête pour envoyer le fichier index.html 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req, res) =>{
  console.log(req.body)
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/*
-- urlencoded({extended: true }) Il analyse les requêtes entrantes avec des charges utiles encodées en URL et est basé sur un analyseur de corps
- utilisation de body parser pour transmettre les data qui nous parviennent via biais des formulaires de notre site
-urlencoded({extended: true}) permet à Express d'analyser les données encodées en URL et de les convertir en un objet JavaScript, en prenant en charge des structures de données plus complexes si extended est défini sur true.
*/
 
