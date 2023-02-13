const axios = require('axios');
const cheerio = require('cheerio');
const queue = require('queue');

const worker = require('../utils/getDataFromPage');

const q = queue({ results: [], concurrency: 5 })

module.exports = {
    parseData: async (res, url, path) => {
        const pageHtml = (await axios.get(url + path)).data
        const $ = cheerio.load(pageHtml)
        $('#MainCol > div:nth-child(1) > ul > li').each((_i, el) => {
            const link = $(el).find('a').attr('href')
            q.push(function (cb) {
                worker(url + link)
                cb(null)
            })
        })

        q.start(function (err) {
            if (err) throw err
            res.send("succesfully parsed");
        })
    }
}