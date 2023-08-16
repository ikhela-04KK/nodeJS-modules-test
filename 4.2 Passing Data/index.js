import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// creer une fonction qui permet de connaître le nombre de lette du nom et du prenom
let nombreLetterName ="";
function countName(req,res,next){
  let Name = req.body["fName"] + req.body["lName"];
  nombreLetterName = Name.length;
  next();
}
app.use(countName);


app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  const data = {
    lenLetter : `<h1>There are ${nombreLetterName} letter in your name `,
  };
  res.render(__dirname + "/views/index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
