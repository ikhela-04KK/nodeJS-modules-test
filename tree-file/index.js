
import fs from "fs";
import path from "path";


// Function that return the tree of your folder that you provide 

export function TreeWalker(folder, indent =''){
    const file = fs.readdirSync(folder);

    file.forEach(file => {
        if (file != "node_modules"){

            const dirname = path.join(folder, file)
            const state = fs.statSync(dirname); 
            
            if (state.isDirectory()){
                console.log(indent + '📁 ' + file);
                    TreeWalker(dirname, indent + '  ');
            }
            else {
                    console.log(indent + '📄 ' + file);
            }
        }
    });
}
