const { gotScraping } = require('got-scraping');
const cheerio = require('cheerio');
const queue = require('queue');

const worker = require('../utils/getDataFromPage');
const client = require('../configs/db.config');

const q = queue({ results: [], concurrency: 5 })

module.exports = {
    parseData: async (res, url, path) => {
        const pageHtml = (await gotScraping.get(url + path)).body
        const $ = (cheerio.load(pageHtml))
        const mainDiv = $('body').find('#mosaic-jobResults ul li')
        mainDiv.each((i, li) => {
            const a = $(li).find('h2.jobTitle a.jcs-JobTitle');
            const link = a.attr('href');
            if (link) {
                console.log(url + link)
                q.push(function (cb) {
                    worker(url, link)
                    cb(null)
                })
            }
        })

        q.start(function (err) {
            if (err) throw err
            res.send("succesfully parsed");
        })
    }
}