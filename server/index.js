const express = require('express')
const path = require("path")
const logger = require('./logger')

const app = express()
const port = process.env.PORT || 3001

const static_dir = path.resolve(path.join(__dirname, '../client/build'))

app.use('/', express.static(static_dir))

app.listen(port, () => {
    logger.get().info(`port ${port}, im listening...`)
})

