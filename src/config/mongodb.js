import { MongoClient } from "mongodb";

let client;

export const connectToMongoDB = () => {
    MongoClient.connect(process.env.MONGO_URL)
    .then(clientInstance => {
        client = clientInstance
        console.log("MongoDB is Connected");
    })
    .catch(err => {
        console.log("Error connecting MongoDB : ",err);
    })
}

export const getDB = () => {
    return client.db()
}