import fs from 'fs'
import path from 'path'

const dataFolder = path.resolve(__dirname, '..', "data")

const init = () => {
    //Prepage folders
    if (!fs.existsSync(dataFolder)) {
        fs.mkdirSync(dataFolder)
    }

    const today = new Date()
    const todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

    console.log(todayString)
}

init()

module.exports = "hello"