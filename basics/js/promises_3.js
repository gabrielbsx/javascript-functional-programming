function generateNums(min, max, time) {
  if (min > max) [max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(function () {
      const factor = max - min + 1
      const random = parseInt(Math.random() * factor) + min
      resolve(random)
    }, time)
  })
}

function generateSomeNums() {
  return Promise.all([
    generateNums(1, 60, 1000),
    generateNums(1, 60, 500),
    generateNums(1, 60, 3000),
    generateNums(1, 60, 1500),
  ])
}

console.time('promise')

generateSomeNums()
  .then(console.log)
  .then(() => {
    console.timeEnd('promise')
  })