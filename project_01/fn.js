const fs = require('node:fs')
const path = require('node:path')

function readDirectory(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, {}, (err, files) => {
      if (err) reject(err)
      resolve(files.map((file) => path.join(directory, file)))
    })
  })
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, {}, (err, file) => {
      if (err) reject(err)
      const content = file.toString()
      resolve(content)
    })
  })
}

function readFiles(filesPath) {
  return Promise.all(filesPath.map(readFile))
}

function getArrayByEndsWithPattern(array, pattern) {
  return array.filter(el => el.endsWith(pattern))
}

module.exports = {
  getArrayByEndsWithPattern,
  readFile,
  readFiles,
  readDirectory
}