const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://cloud-jobs:BT3MEYSUvp8LPChs@cluster0.jgfhqrg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client