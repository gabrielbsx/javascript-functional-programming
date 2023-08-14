// function pure
function areaCircle(r, pi) {
  return r * r * pi
}

// function impure
function areaCircleImpure(r) {
  return r * r * Math.PI
}


// function impure (exception because dependency of timer)
function generateRandomNumber(min, max) {
  const factor = max - min + 1
  return parseInt(Math.random() * factor) + min
}

let execs = 0
function sum(a, b) {
  execs++ // side effects
  return a + b
}