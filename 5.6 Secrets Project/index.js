// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";


// 2. Create an express app and set the port number.
const app =express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
// 3. Use the public folder for static files.

app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res)=>{
    const config = {
        method:'get',
        url:'/random',
        baseURL:API_URL
    }
    try {
        const response = await axios(config);
        const content = response.data;
        console.log(content);
        const data = {
            user : content.username ,
            secret:content.secret
        };
        console.log(data);
        res.render("index.ejs", data);
    } catch (error) {
        console.error('Error', error.message);
        res.status(500).send('An error occured');
    }
    
})

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
// app.post("/", async (req, res)=>{

//     const config = {
//         method:'get',
//         url:'random',
//         baseURL:API_URL
//     }
//     try {
//         const response = await axios(config);
//         const content = JSON.stringify(response.data);
//         console.log(content);
//         const data = {
//             user : content.username ,
//             secret:content.secret
//         };
//         console.log(data);
//         res.render("index.ejs", data);
//     } catch (error) {
//         console.error('Error', error);
//         res.status(500).send('An error occured');
//     }
    
// })



// 6. Listen on your predefined port and start the server.
app.listen(port, ()=>{
    console.log(`backend start to the port ${port}`);
})