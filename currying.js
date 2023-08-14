const somar = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

const soma = function (a, b) {
  return a + b
}

const subtracao = function (a, b) {
  return a - b
}

const multiplicacao = function (a, b) {
  return a * b
}

const divisao = function (a, b) {
  return a / b
}

const calcular = function (a) {
  return function (b) {
    return function (operacao) {
      return operacao(a, b)
    }
  }
}

console.log(somar(1)(2)(3))

console.log(calcular(8)(2)(divisao))