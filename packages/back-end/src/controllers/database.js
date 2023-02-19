const client = require("../configs/db.config");

module.exports = {
    insertObject: async (jobInfo) => {
        await (await client.connect())
            .db('jobs')
            .collection('jobs')
            .updateOne(
                jobInfo,
                {
                    $setOnInsert: jobInfo
                },
                { upsert: true }
            )
    },
    getJobs: async (params) => {
        const { searchStr, skip, limit } = params
        const filter = !searchStr ? {} : { jobTitle: { $regex: searchStr || '' } }
        const connected = await client.connect()
        const coll = connected.db('jobs').collection('jobs');
        const cursor = coll.find(filter, { skip: Number(skip) || 0, limit: Number(limit) || 10 });
        const result = await cursor.toArray();
        await client.close();
        return result
    }
}