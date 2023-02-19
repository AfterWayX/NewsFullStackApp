const { getJobs } = require("../controllers/database")

module.exports = {
    getJobs: async ({ res, limit, skip, searchStr }) => {
        return res.send(await getJobs({ searchStr, skip, limit }));
    }
}