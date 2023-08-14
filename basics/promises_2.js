const fs = require('node:fs')
const path = require('node:path')

const p = (path) => new Promise(resolve => {
  fs.readFile(path, (err, data) => resolve({ err, data }))
})

p(path.join(__dirname, 'data.txt'))
  .then(({ err: _, data }) => data)
  .then(content => content.toString())
  .then(console.log)