import { launch } from 'puppeteer';
import fs from 'fs';
import path from 'path';

const dataFolder = "data"

;(async () => {
const browser = await launch({headless: false});
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1600 })

})();