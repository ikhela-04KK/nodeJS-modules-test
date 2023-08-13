import express from "express"; 
const  app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("<h1>Hello, word!</h1>");
    // req.rawHeaders; pourvoir les informations de l'en tête de la requête t
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}. `); 
});

// use nodemon automatically restart node application
// use this , you can do i nodemon index.js
// g est utilisé npm i -g pour installer lapplication globalemn sur mon appareil
