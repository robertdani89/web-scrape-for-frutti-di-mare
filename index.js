const { launch } = require('puppeteer')
const { products } = require('./config')
const hello = require('./storage/file-system')

let browser, page

const init = async () => {
    browser = await launch({ headless: false })
    page = await browser.newPage()

    //Block images
    await page.setRequestInterception(true)
    page.on('request', (req) => {
        if (req.resourceType() === 'image') {
            req.abort()
        }
        else {
            req.continue()
        }
    })

    await page.setViewport({ width: 1920, height: 1600 })

}

const gatherData = async () => {
    for (const p of products) {

    }
}

const run = async () => {
    await init()
    await gatherData()
}

run()