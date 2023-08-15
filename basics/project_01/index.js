const path = require('node:path')
const {
  getArrayByEndsWithPattern,
  readDirectory,
  readFiles,
  removeEmptyLines,
  removeIfIncludes,
  removeIfOnlyNumber,
  removeSymbolsFromTexts,
  mergeElements,
  separateTextBySymbol,
  groupElements,
  orderByNumericAttr,
} = require("./fn")

const subtitlesFolder = path.join(__dirname, '..', 'legendas')

const symbols = [
  '.', '?', '♪', '-', '"', ',', '_',
  '<i>', '</i>', '\r', '[', ']', '(', ')'
]

// DRY principle
readDirectory(subtitlesFolder)
  .then(getArrayByEndsWithPattern('.srt'))
  .then(readFiles)
  .then(mergeElements)
  .then(separateTextBySymbol('\n'))
  .then(removeEmptyLines)
  .then(removeIfIncludes('-->'))
  .then(removeIfOnlyNumber)
  .then(removeSymbolsFromTexts(symbols))
  .then(mergeElements)
  .then(separateTextBySymbol(' '))
  .then(removeEmptyLines)
  .then(removeIfOnlyNumber)
  .then(groupElements)
  .then(orderByNumericAttr('repeated', 'desc'))
  .then(console.log)
  .catch(console.error)