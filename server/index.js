const express = require('express')
const { stat } = require('fs')
const path = require("path")

const app = express()
const port = process.env.PORT || 3001

const static_dir = path.resolve(path.join(__dirname, '../client/build'))
console.log(static_dir)

app.use('/', express.static(static_dir))

app.listen(port, () => {
    console.log(`port ${port}, im listening...`)
})

