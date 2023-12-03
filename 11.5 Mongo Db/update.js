import { MongoClient, ServerApiVersion } from "mongodb";
import genererAppart from "./appart.js";

const uri = "mongodb+srv://ikhela-04KK:ikhela-04KK@test0.s9iyuh2.mongodb.net/?retryWrites=true&w=majority";
<<<<<<< HEAD
=======
// const appart = genererAppart();
>>>>>>> 49eafc416cfa5233fdedc72c7b366cca43da35bd

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
// async function updateA(client){
//     try {
//         const result = await client 
//         .db("sample_airbnb") 
//         .collection("listingsAndReviews")
//         .updateOne({name:'Ribeira Charming Duplex'}, {$set: {summary: "may with the best on your heart"}}) // sensible à la casse faire attention aux donnée que tu rentres
//         console.log(result.matchedCount);
//     } catch (error) {
//         console.log("Une erreur s'est produite lors de la recherche :", error)
//     }
// }
// updateA(client)  { use upsert to verify if the field is exites he is already}

// update the property which not have property_type = false
async function updateProperty(client){
    try {
        const result = await client 
        .db("sample_airbnb") 
        .collection("listingsAndReviews")
        .updateMany( {property_type:{$exists :false}}, {$set: {property_type:"ikhela"}})
        console.log(result.matchedCount);
        console.log(result.modifiedCount);

    } catch (error) {
        console.log(error.message);
    }}
  

  

// generer des noms aléatoires pour tous les lovely loft 
async function updateDuplicateItem(client, db,collection, operation){
  try{
    const cursor = await client 
    .db(db)
    .collection(collection)
    .updateMany(operation.updateQuery , operation.updateStatement); 
    console.log(cursor.matchedCount);
    console.log(cursor.modifiedCount);
} catch(error){
      console.log(error.message)
  }
}

// dAff
async function findAndReplaceAppart(client,db,collections,nameOfListing){
  const collection= await client.db(db).collection(collections)
  
  const find= collection.find({name:nameOfListing})

  const results = await find.toArray()
  // results.forEach(objects => {return objects._id})

  for (const result of results ){
    
    const operation = {
      updateQuery: { _id: result._id },
      updateStatement: { $set: { name: genererAppart().typeAppart, description:genererAppart().description} }
    }
    const update = collection.updateOne(operation.updateQuery , operation.updateStatement); 
    // console.log(update.matchedCount);
    // console.log(update.modifiedCount);
  }


  // result  
  //     ? console.log(`Found a listening to '${nameOfListing}' : `,result)
  // //     : console.log(`No listening to ${nameOfListing}`)
  // if (result){
  //     console.log(`Found a listening to '${nameOfListing}'`);
  //     console.log(JSON.stringify(result));
  // }
  // else{
  //     console.log(`No listening to '${nameOfListing}'`)
  // }
}
findAndReplaceAppart(client, "sample_airbnb", "listingsAndReviews","Luxueux Appartement Appartement avec Jardin")
// const operation = {
//   updateQuery: { name: "Luxueux Appartement Appartement avec Jardin" },
//   updateStatement: { $set: { name: genererAppart().typeAppart, description:genererAppart().description} }
// }
// updateDuplicateItem(client, "sample_airbnb","listingsAndReviews",operation)
// updateT(client)

search(client);