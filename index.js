const puppeteer = require('puppeteer')
const config = require('./config')
const data = require('./storage/file-system')

let browser, page

const init = async () => {
    browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    page = await browser.newPage()

    //Block images
    // await page.setRequestInterception(true)
    // page.on('request', (req) => {
    //     if (req.resourceType() === 'image') {
    //         req.abort()
    //     }
    //     else {
    //         req.continue()
    //     }
    // })

    await page.setViewport({ width: 1920, height: 1600 })
}

const gatherData = async () => {
    for (const p of config.products) {
        await page.goto(p.page)

        const dataToSave = []
        for (const d of p.data) {
            const element = await page.$(d.selector)
            const value = await (await element.getProperty(d.property)).jsonValue()
            console.log(value)
        }
        
        //data.addData(p.name)
    }
}

const run = async () => {
    await init()
    await gatherData()
}

run()