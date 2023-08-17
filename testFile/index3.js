// donner la possibilité à l'utilisateur d"entrer quelque chose e
//  initialisation du package inquier qui permet d'interroger l'utilisateur afin de pouvoir une reponse 
import inquirer from "inquirer" 
import qr from "qr-image"
import fs from "fs"
inquirer
    .prompt([
        {
            type:'input',
            name :'url',
            message :'Entrez votre url ?',
        }
    ])
    .then((rep) => {
        const urls = rep.url;
        let qr_png = qr.image(urls);
        qr_png.pipe(fs.createWriteStream('url3.png')); //permet de creer un fichier url.svg afin d'y écrire là-dedans
        fs.writeFile("URL.txt", urls, (err) =>{
            if (err) throw err;
            console.log("The file has been saved");
        });  
    });
// inquirer
//     .prompt(
//         [
//             {
//                 type:'input',
//                 name :'name',
//                 message :'Quel est votre nom ?',
//             },
//             {
//                 type :'list',
//                 name : 'color',
//                 message: 'Quelle est votre couleur préférée ?',
//                 choices: ['Rouge', 'Bleu', 'Vert', 'Jaune'],
//             },
//         ])
//     .then((answers) => {
//         console.log(`Bonjour ${answers.name} ! Aimez-vous la couleur ${answers.color}`);
//     });

