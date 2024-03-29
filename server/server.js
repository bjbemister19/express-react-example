const express = require('express')
const path = require("path")
const logger = require('./logger')

const app = express()
const port = process.env.PORT || 3001

const static_dir = path.resolve(path.join(__dirname, '../client/build'))

app.use(express.json())
app.use('/', express.static(static_dir))

app.get('/*', (req, res, next) => {
  if (req.url.startsWith('/api/')) {
    next();
    return;
  }
  res.sendFile(path.join(static_dir, 'index.html'));
});

app.post('/api/echo', (req, res) => {
  console.log(req);
  res.json(req.body);
})

app.listen(port, () => {
    logger.get().info(`port ${port}, im listening...`)
})

