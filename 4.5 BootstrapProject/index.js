// import dirTree from "directory-tree";

// const tree = dirTree("C:/Users/Administrateur/Documents/nodeJS-modules-test/4.5 BootstrapProject",(item) =>{
//     console.log(item);
// });

// console.log(tree);

// import fs from "fs";
// import path from "path";



// function printDirectoryTree(dirPath, indent = '') {
//     const files = fs.readdirSync(dirPath);

//     files.forEach(file => {
//         if (file !== 'node_modules') { // Exclure le dossier node_modules
//             const filePath = path.join(dirPath, file);
//             const stats = fs.statSync(filePath);

//             if (stats.isDirectory()) {
//                 console.log(indent + '📁 ' + file);
//                 printDirectoryTree(filePath, indent + '  ');
//             } else {
//                 console.log(indent + '📄 ' + file);
//             }
//         }
//     });
// }

// const rootPath = 'C:/Users/Administrateur/Documents/nodeJS-modules-test/4.5 BootstrapProject';
// printDirectoryTree(rootPath);


import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req,res) =>{
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





















