
import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "3fb5217e-a0df-40f1-bede-8f477a8c15f8";
const config = {  
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

// function CONFIGs (key,value){
//   const nconf = {...config}
//   nconf[key]=value
//   return nconf
// }

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch (error) {
    res.render("index.ejs", {content: JSON.stringify(error.response.data) });
  }
});
app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.

  
  // const id = req.body.id; 
  const secret = req.body.secret;
  const score = req.body.score;

  const config ={
    method:'post',
    url:'/secrets',
    baseURL:API_URL,
    headers: {Authorization: `Bearer ${yourBearerToken}` },
    data:{
      secret:secret,
      score:score
    }
  }
  try{
    const response = await axios(config);
    const content = JSON.stringify(response.data);
    res.render("index.ejs", {content:content});
  }
  catch(error){
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {

  const searchId = req.body.id;
  const secret = req.body.secret;
  const score = req.body.score;

  try {
    const response = await axios.put(
      `${API_URL}/secrets/${searchId}`,
      {
        secret: secret,
        score: score,
      },
      config
    );

    const content = JSON.stringify(response.data);
    // console.log(content, "rrrr");
    res.render("index.ejs", { content: content });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});


app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  try {
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});