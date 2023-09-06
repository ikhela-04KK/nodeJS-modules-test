import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "pacome";
const yourPassword = "014355";
const yourAPIKey = "6bdb2140-3d8a-4777-a105-5f25bad7dfe6";
const yourBearerToken = "3fb5217e-a0df-40f1-bede-8f477a8c15f8";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  
  const config = {
    method :'get',
    url :'random',
    baseURL:API_URL
    // headers: {'Authorization': `Bearer ${yourBearerToken}`}
  }
  // let content;
  try{
    const response = await axios(config);
    const content  = JSON.stringify(response.data);
    res.render("index.ejs", {content:content});
  }
  catch(error){
    console.error('Error',error);
    res.status(500).send('An error occured');
  }
  
});

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    const config = {
      method :'get',
      url :'all',
      baseURL:API_URL,
      param:{
        page:2
      },
      auth:{
        username:yourUsername,
        password:yourPassword
      },
      // headers: {'Authorization': `Bearer ${yourBearerToken}`}
    }
    // let content;
    try{
      const response = await axios(config);
      const content  = JSON.stringify(response.data);
      res.render("index.ejs", {content:content});
    }
    catch(error){
      console.error('Error',error);
      res.status(500).send('An error occured');
    }
});

app.get("/apiKey",async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const config = {
    method:'get',
    url: 'filter',
    baseURL:API_URL,
    params:{
      score:5,
      apiKey:yourAPIKey,
    }
  }
  try{
    const response = await axios(config);
    const content = JSON.stringify(response.data);
    res.render("index.ejs",{content:content});
  }
  catch(error){
    console.error('Error', error);
    res.status(500).send('An error occured');
  }

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  const config = {
    method:'get',
    url: 'secrets/42',
    baseURL:API_URL,
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  }
  try{
    const response = await axios(config);
    const content = JSON.stringify(response.data); //convert javascript objec to json for seeing that in a div of index.ejs
    res.render("index.ejs",{content:content});
  }
  catch(error){
    console.error('Error', error);
    // res.status(500).send('An error occured');
    res.render("index.ejs", {content:error.message},
    )
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
