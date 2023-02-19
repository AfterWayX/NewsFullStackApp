const { getJobs } = require("../controllers/database")

module.exports = {
    getJobs: async ({ res, limit, skip, query }) => {
        return res.send(await getJobs({ query, skip, limit }));
    }
}