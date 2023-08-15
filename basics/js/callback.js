const fs = require('node:fs')
const path = require('node:path')

const filepath = path.join(__dirname, 'data.txt')

fs.readFile(filepath, {}, (err, data) => {
  if (err) return err
  const content = data.toString()
  console.log(content)
})

const content = fs.readFileSync(filepath).toString()

console.log(content, 'first')