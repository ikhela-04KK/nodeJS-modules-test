import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
// const footer = __dirname + "/views/footer.ejs"

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
     // pourquoi lui il ne passe pas
  };
  res.render(__dirname + "/views/index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
