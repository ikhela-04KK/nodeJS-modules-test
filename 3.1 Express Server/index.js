import express from "express"; 
const  app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("<h1>Hello, word!</h1>");
    // req.rawHeaders; pourvoir les informations de l'en tête de la requête t
});

app.get("/about", (req,res) => {
    res.send("<h1>Welcome to about </h1>")
});

app.post("/tshirt", (req,res) => {
    res.send("<h1>Welcome to t-shirt</1>")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}. `); 
});

// use nodemon automatically restart node application
// use this , you can do i nodemon index.js
// g est utilisé npm i -g pour installer lapplication globalemn sur mon appareil
// use postman : permet aux developpeurs de tester , developper et de documenter de requêtes http 
// cela facilite le developpement , et le debogage des applications qui necessite l'utilisation d'api en ligne 

