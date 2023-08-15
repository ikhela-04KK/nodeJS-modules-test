import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));

// ajout de la date
const d = new Date(2023,8,19);
let day = d.getDay();
let message = day === 5 || day == 6 ? "Weekend, it's time to have fun!" : "a weekday, it's time to work hard!";




app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    message: message,
  });
});

app.listen(port, () => {
  console.log(`listenning to port ${port}`);
});
/*
// <h1>Hey! It's <% if (day === 5 || day == 6) { %>Weekend, it's time to have fun!<% } else { %>a weekday, it's time to work hard! <%} %></h1>
*tu de vais gérer la logique de gestion des message dans index.js 
*/
