function exec(fn, ...params) {
  return function (text) {
    return `${text}: ${fn(...params)}`
  }
}

function sum(a, b, c) {
  return a + b + c
}

function mult(a, b) {
  return a * b
}

console.log(exec(sum, 30, 40, 50, 20)('Resultado da soma: '))
console.log(exec(mult, 30, 40, 50, 20)('Resultado da multiplicação: '))