const service = require('../services/parser');

const url = 'https://www.glassdoor.com';
const path = '/Job/full-stack-developer-jobs-SRCH_KO0,20.htm';

module.exports = {
    startParsing: async (req, res) => {
        const pages = req.query.pages || 1;
        return service.parseData(res, url, path)
    }
}