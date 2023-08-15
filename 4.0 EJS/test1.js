import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3004;
const __dirname = dirname(fileURLToPath(import.meta.url))
// set ejs as engining template
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let data = {
    name: "Akashdeep",
    hobbies: ["playing football ", "playing chess", "cycling"],
  };
  res.render(__dirname +"/test1", { data: data });
});

app.listen(port, () => {
  console.log(`istenning to port ${port}`);
});
