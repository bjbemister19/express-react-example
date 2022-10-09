const express = require('express')
const path = require("path")

const app = express()
const port = process.env.PORT || 3001

const static_dir = path.resolve(path.join(path.basename(__dirname), 'client/build'))

app.use('/', express.static(static_dir))

app.listen(port, () => {
    console.log(`port ${port}, im listening...`)
})

