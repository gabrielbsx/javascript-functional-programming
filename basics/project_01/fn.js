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

function getArrayByEndsWithPattern(pattern) {
  return function (array) {
    return array.filter(el => el.endsWith(pattern))
  }
}

function removeEmptyLines(array) {
  return array.filter(el => el.trim())
}

function removeIfIncludes(patternText) {
  return function (array) {
    return array.filter(el => !el.includes(patternText)) 
  }
}

function removeIfOnlyNumber(array) {
  return array.filter(line => isNaN(line.trim()))
}

function removeSymbolsFromTexts(symbols) {
  return function (array) {
    return array.map(el => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join('')
      }, el)
    })
  }
}

const mergeElements = array => array.join(' ')

function separateTextBySymbol(symbol) {
  return function(content) {
    return content.split(symbol)
  }
}

function groupElements(elements) {
  return Object.values(
    elements.reduce((acc, element) => {
      const el = element.toLowerCase()
      const repeated = acc[el] ? acc[el].repeated + 1 : 1
      acc[el] = {
        element: el,
        repeated
      }
      return acc
    }, {})
  )
}

function orderByNumericAttr(attr, sortBy = 'asc') {
  return function (array) {
    const asc = (obj1, obj2) => obj1[attr] - obj2[attr]
    const desc = (obj1, obj2) => obj2[attr] - obj1[attr]
    return array.sort(sortBy === 'desc' ? desc : asc)
  }
}

module.exports = {
  getArrayByEndsWithPattern,
  readFile,
  readFiles,
  readDirectory,
  removeEmptyLines,
  removeIfIncludes,
  removeIfOnlyNumber,
  removeSymbolsFromTexts,
  mergeElements,
  separateTextBySymbol,
  groupElements,
  orderByNumericAttr,
}