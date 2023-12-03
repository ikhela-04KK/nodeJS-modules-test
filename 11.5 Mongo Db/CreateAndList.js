// const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://ikhela-04KK:ikhela-04KK@test0.s9iyuh2.mongodb.net/?retryWrites=true&w=majority";
<<<<<<< HEAD

=======
>>>>>>> 49eafc416cfa5233fdedc72c7b366cca43da35bd

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
<<<<<<< HEAD
    deprecationErrors: true,
    // Pour beneficier des fonctionnalités les plus optimales de MongoDb
  },
  useNewUrlParser: true,
  useUnifiedTopology:true,
=======
    deprecationErrors: true, 
  }
>>>>>>> 49eafc416cfa5233fdedc72c7b366cca43da35bd
});
// this function retrieve a list of databases in our cluster and print the results in the console.
async function listDatabases(client) { 
    const databaseLists = await client.db().admin().listDatabases();
    console.log('database: ');
    databaseLists.databases.forEach(db => console.log(` -${db.name}`));// c'est une façon d'écrire une fonction quand vous avez qu'un seul paramètre 
}

<<<<<<< HEAD
// get the lists of database collections in the following way: 
// async function listCollections(client) {
//     const databaseCollections = await client.db("sample_airbnb").listCollections()
//     console.log(`Collection in the database sample_airbnb: `);
//     databaseCollections.forEach(collection => console.log(collection.name));
// } 

// our function to create a new listing 
async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`)
}
=======
// const test01 = listDatabases(client); 
// console.log(test01);

// // get the lists of database collections in the following way: 
// async function listCollections(client) {
//     const databaseCollections = await client.db("sample_geospatial").listCollections()

//         console.log(`Collection in the database sample_airbnb: `);
//         databaseCollections.forEach(collection => console.log(collection.name));
// }
>>>>>>> 49eafc416cfa5233fdedc72c7b366cca43da35bd

// // our function to create a new listing 
// // async function createListing(client, newListing) {
// //     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
// //     console.log(`New listing created with the following id: ${result.insertedId}`)
// // }

// // our function to create many listings
// async function createManyListings(client, newListings){
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings)

//     console.log(`${result.insertedCount}  news listings created successfully`);
//     console.log(result.insertedIds);
// }

async function run() {
  try {

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();// return a promise

    // Send a ping to confirm a successful connection
<<<<<<< HEAD
    // await client.db("admin").command({ ping: 1 });


    await listDatabases(client);   
    
    // await listCollections(client);
=======
    await client.db("admin").command({ ping: 1 });
    await listDatabases(client);
>>>>>>> 49eafc416cfa5233fdedc72c7b366cca43da35bd

    // await listCollections(client);
    //* We can call this function by passing a connected MongoClient as well as an object that contains information about listing
    // await createManyListings(client, 
    //!BSON field 'insert.documents.0' is the wrong type 'array', expected type 'object' if you don't use  inserMany() for many request 
<<<<<<< HEAD
        [
            {
              name:"Paraguay - new fourplex",
              summary:"it's a best house to discovery the modern architecture",
              bathrooms:9,
            },
            {
              name:"Portugal - old house of CR7",
              summary:"it's the best place for any fan of christiano ronaldo",
              bathrooms:7,
            },
            {
              name:"Monaco Duplex",
              summary:"the best villa in Monaco",
              bathrooms:7
            }
        ]
    )
=======
    //     [
    //         {
    //         name : "Lovely Loft",
    //         summary : "A charming loft in paris",
    //         bedrooms: 1,
    //         bathrooms:1,
    //         },{ 
    //         name : "Duplex sunshine",
    //         summary : "A duplex placeholder i1n paris",
    //         bedrooms: 1,
    //         bathrooms:12,
    //         },{
    //         name : "tri-plex",
    //         summary : "A tripleplex placeholder in milan",
    //         bedrooms: 4,
    //         bathrooms:9,
    //         }
    //     ]
    // )
>>>>>>> 49eafc416cfa5233fdedc72c7b366cca43da35bd

    // to display the list of documents of the collection 
    // db.listingsAndReviews.findOne();

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch (error) {
    console.error("Error in run:", error);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
