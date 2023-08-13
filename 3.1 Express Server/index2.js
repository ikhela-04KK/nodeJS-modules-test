// utlisation de postam et d'autres méthodes 
import express from "express"; 
const app = express();
const port =3004;

app.get("/about", (req, res) =>{
    res.send("<h1>Home Page</h1>"); // envoi la requête pour recevoir les données de la page web 
});

app.post("/register", (req, res) =>{
    res.sendStatus(201);// dans le sens d'inscrire un nouvel utilisateur et il renvoie le,code 201 pour assurer qu'il a reçu les bonnes ressources 
});

app.put("/user/angela", (req, res) =>{
    res.sendStatus(200); // change certaines informations de l'utilisateur, dans ce cas la base de donnée renvoie toutes les informations sur l'utilisateur et sadapte en fonction du changement 
});

app.patch("/user/angela", (req, res) =>{
    res.sendStatus(200); // set à changer une seul information comme le prenom
});

app.delete("/user/angela", (req, res) =>{
    res.sendStatus(200); // dans notre cas va supprimer l'utilisateur avec un nom particulier 
});

app.listen(port,() =>{
    console.log(`server is runnning on port ${port}`);
});

// faites npm install dans ton projet importer npde , pour installer toutes les dependances 
// les codes de statut Http en tant que réponses et les différentes http 
// * MIDDLEWARES: c'est un élément qui s'intercalles entre les demandes brutes qui nous parviennent 
// * - permet de preé-traiter les demandes comme changer l'aspect de la requête , utiliser aussi pour les login
// * on peut utiliser aussi pour implementer le serveur proxy 
