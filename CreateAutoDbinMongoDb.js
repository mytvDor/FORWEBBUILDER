const { MongoClient } = require("mongodb");

async function createCollection() {
  const uri =
    "mongodb+srv://sumitdhonde0:OP3ZFh4RtwEm1RdJ@cluster100.recamce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster100"; 
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to database");

    const database = client.db("hi"); 
    const collectionName = "hello"; 

    const collection = await database.createCollection(collectionName);
    console.log(`Collection ${collectionName} created successfully`);
  } catch (error) {
    console.error("Error creating collection:", error);
  } finally {
    await client.close();
    console.log("Database connection closed");
  }
}

createCollection();
