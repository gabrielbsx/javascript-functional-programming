const fs = require('node:fs')
const path = require('node:path')

function readDirectory(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, {}, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

function getArrayByEndsWithPattern(array, pattern) {
  return array.filter(el => el.endsWith(pattern))
}

module.exports = {
  getArrayByEndsWithPattern,
  readDirectory
}