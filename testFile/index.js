// const fs = require("fs");
import fs from "fs";

fs.readFile("message.txt", "utf-8", (err,data) => {
    if (err){ 
        console.error('Une erreur s\'est produite :', err);
        return;
    }
    console.log('Contenu du fichier :', data );
}); 
