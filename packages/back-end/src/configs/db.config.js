const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://cloud-jobs:${process.env.DB_PASSWORD}@cluster0.jgfhqrg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client;