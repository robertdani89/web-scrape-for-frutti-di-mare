const fs = require('fs')
const path = require('path')

const dataFolder = path.resolve(__dirname, '..', "data")
let filePath

(() => {
    //Prepage folders
    if (!fs.existsSync(dataFolder)) {
        fs.mkdirSync(dataFolder)
    }

    const today = new Date()
    todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    const fileName = `${todayString}.csv`
    filePath = path.resolve(dataFolder, fileName)

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "")
    }
})()

const addData = (data) => {
    fs.appendFileSync(filePath, data + "\n");
}

const getData = () => {
    return fs.readFileSync(filePath, { encoding: "utf-8" });
}

module.exports = { addData, getData }