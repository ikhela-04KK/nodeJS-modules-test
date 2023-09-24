import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://ikhela:ikhela-04KK@test0.s9iyuh2.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
 
// Modify listing 
async function search(client) {
    try {
      const cursor =client
        .db("sample_airbnb")
        .collection("listingsAndReviews")
        .find(); 

      const results = await cursor.toArray();
      console.log(results.forEach(objects => console.log(objects.property_type)));  

    } catch (error) {
      console.error("Une erreur s'est produite lors de la recherche :", error);
    }
  }
  search(client);
// read one client 
  async function searchA(client){
    try {
        const result = await client 
        .db("sample_airbnb") 
        .collection("listingsAndReviews")
        .findOne() 

    // console.log(JSON.stringify(result));
    console.log(result._id);  
    console.log(result.name);  
    console.log(result.summary);
    

    } catch (error) { 
        console.log("Une erreur s'est produite lors de la " , error.message);
    }
  }
//   searchA(client)

// update airbnb place 
async function updateA(client){
    try {
        const result = await client 
        .db("sample_airbnb") 
        .collection("listingsAndReviews")
        .updateOne({name:'Ribeira Charming Duplex'}, {$set: {summary: "may with the best on your heart"}}) // sensible à la casse faire attention aux donnée que tu rentres
        console.log(result.matchedCount);
    } catch (error) {
        console.log("Une erreur s'est produite lors de la recherche :", error)
    }
}
// updateA(client)  { use upsert to verify if the field is exites he is already}

// update the property which not have property_type = false
async function updateT(client){
    try {
        const result = await client 
        .db("sample_airbnb") 
        .collection("listingsAndReviews")
        .updateMany( {property_type:{$exists :false}}, {$set: {property_type:"ikhela"}})
        console.log(result.matchedCount);
        console.log(result.modifiedCount);

    } catch (error) {
        console.log(error.message);
    }
}
// updateT(client)

