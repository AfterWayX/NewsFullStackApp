const { gotScraping } = require('got-scraping');

const client = require('../configs/db.config');
const { insertObject } = require('../controllers/database');

module.exports = async (url, query) => {
    const id = query.split('?').pop().split('&').shift()
    const tk = '1gpi1ek6ohdhd801' // here we maybe will need to change this parameter, for this access site and copy from request params this one
    const urlWithId = `${url}/viewjob?viewtype=embedded&${id}&from=vjs&tk=${tk}&continueUrl=%2Fjobs%3Fq%3DProduction%26vjk%3Da2a0ed5a6860e005%26l%3DBeachwood%252C%2BOH&spa=1&hidecmpheader=0`;
    const data = JSON.parse((await gotScraping.get(urlWithId)).body)
    const jobInfoModel = data.body.jobInfoWrapperModel.jobInfoModel
    const companyName = jobInfoModel.jobInfoHeaderModel.companyName
    const jobTitle = jobInfoModel.jobInfoHeaderModel.jobTitle
    const location = jobInfoModel.jobInfoHeaderModel.formattedLocation
    const description = jobInfoModel.sanitizedJobDescription
    const jobUrl = `${url}/viewjob?${id}&tk=1gpi1lqipk7io800&from=serp&vjs=3`
    const jobInfo = {
        companyName, jobTitle, location, description, jobUrl
    }
    try {
        insertObject(jobInfo)
    } catch (err) { }
}