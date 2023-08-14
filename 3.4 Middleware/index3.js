import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

// creation de la fonction logger qui enregistre l'url de la requête et la methode de la requête

function logger(req,res, next){
  console.log(`url: ${req.url} method: ${req.method}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
