const p = new Promise(function (resolve) {
  resolve(3)
})

p
  .then((value) => value + 10)
  .then((value) => value - 4)
  .then(console.log)

console.log(typeof p, p)

// callback hell
setTimeout(function () {
  console.log('Exec cb...')

  setTimeout(function () {
    console.log('Exec cb 2...')

    setTimeout(function () {
      console.log('Exec cb 3...')
    }, 2000)
  }, 2000)
}, 2000)

function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Exec promise...')
      resolve()
    }, time)
  })
}

waitFor(3000)
  .then(() => waitFor())
  .then(waitFor())

function generateNums(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    const factor = (max - min + 1)
    const random = parseInt(
      (Math.random() * factor) + min
    )
    resolve(random)
  })
}

generateNums(10, 30)
  .then(num => num * 1000)
  .then(numX1000 => `The value generated is ${numX1000}`)
  .then(console.log)