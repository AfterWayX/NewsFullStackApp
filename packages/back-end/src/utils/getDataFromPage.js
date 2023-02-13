const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (link) => {
    const linkHtml = (await axios.get(link, {
        params: {
            referer: 'https://www.glassdoor.com/Job/manassas-va-java-developer-jobs-SRCH_IL.0,11_IC1130381_KO12,26.htm?src=GD_JOB_AD&srs=ALL_RESULTS&jl=1008444971130&ao=1136043&s=345&guid=000001864bdcaa3396e7078b63dad691&pos=101&t=SR-JOBS-HR&vt=w&ea=1&cs=1_44755882&cb=1676309998296&jobListingId=1008444971130&jrtk=3-0-1gp5tpaj5jfmo801-1gp5tpajqghqm800-85b3d27fc4ca3f9a-'
        }
    })).data
    const $ = cheerio.load(linkHtml)
    const jobParent = $('#JDCol > article > div.d-flex.justify-content-between').parent().find('div:nth-child(2)').html()
    console.log(jobParent)
}