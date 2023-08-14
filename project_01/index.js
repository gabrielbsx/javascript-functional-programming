const path = require('node:path')
const { getArrayByEndsWithPattern, readDirectory, readFiles } = require("./fn")

const subtitlesFolder = path.join(__dirname, '..', 'legendas')

readDirectory(subtitlesFolder)
  .then((files) => getArrayByEndsWithPattern(files, '.srt'))
  .then((files) => readFiles(files))
  .then(console.log)
  .catch(console.error)