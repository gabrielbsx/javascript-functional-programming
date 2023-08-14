const path = require('node:path')
const { getArrayByEndsWithPattern, readDirectory } = require("./fn")

const subtitlesFolder = path.join(__dirname, '..', 'legendas')

readDirectory(subtitlesFolder)
  .then((files) => getArrayByEndsWithPattern(files, '.srt'))
  .then(console.log)
  .catch(console.error)