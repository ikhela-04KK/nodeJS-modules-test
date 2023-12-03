import { MongoClient, ServerApiVersion } from "mongodb";


const uri = "mongodb+srv://ikhela-04KK:ikhela-04KK@test0.s9iyuh2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
});

// delete file who have created before 2018
async function deleteA (client,date_scraped){
    try {
        const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteMany({last_scraped:{$lt : date_scraped}})
        console.log(result.deletedCount)
    } catch (error) {
        console.log(error.message);
    }
}

deleteA(client, new Date("2019-02-15"))

