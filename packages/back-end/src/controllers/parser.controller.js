const service = require('../services/parser');

const url = 'https://www.indeed.com';
const defaultPath = '/q-Production-l-Beachwood,-OH-jobs.html';

module.exports = {
    startParsing: async (req, res) => {
        const path = req.query.path || defaultPath;
        return await service.parseData(res, url, path)
    }
}