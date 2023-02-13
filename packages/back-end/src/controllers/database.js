const client = require("../configs/db.config");

module.exports = {
    insertObject: (jobInfo) => {
        client.connect(err => {
            const collection = client.db("test").collection("devices");
            collection.insertOne(jobInfo, (err, result) => {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            })
            client.close();
        });
    }
}