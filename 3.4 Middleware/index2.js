import express from "express";
import morgan from "morgan"; 


const app = express();
const port = 3000;

// mount the middleware
app.use(morgan("combined"));

app.get("/user", (req, res) => {
  console.log(`url: ${req.url} method: ${req.method}`);
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/*
Morgan permet de capturer des informations sur les requêtes entrantes, telles que les méthodes HTTP, les URL, les codes de statut et les délais de réponse. 
- dev: Ce format est plus succinct et pratique pour le développement. Il affiche la méthode HTTP, le code de statut, le temps de réponse en millisecondes et l'URL demandée.plus compact et propice pour le developpemt

- utilier ces propres ça c'est à quelques chose à faire 
*/