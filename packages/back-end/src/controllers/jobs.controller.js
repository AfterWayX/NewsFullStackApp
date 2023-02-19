const service = require('../services/jobs');

module.exports = {
    getJobs: async (req, res) => {
        const { limit, skip, searchStr } = req.query
        return await service.getJobs({res, limit, skip, searchStr})
    }
}