const arr = [10, 20, 30, 40]
const fn = function (acc, currentElement) {
  return acc + currentElement
}
// acc = 0 + 10 = 10
// acc = 10 + 10 = 20
// acc = 20 + 10 = 30
// acc = 30 + 30 = 60
// acc = 60 + 40 = 100
// res = 100
console.log(arr.reduce(fn))

const carrinho = [
  {
    nome: 'caneta',
    quantidade: 10,
    preco: 7.99
  },
  {
    nome: 'caderno',
    quantidade: 6,
    preco: 21.99
  },
  {
    nome: 'tesoura',
    quantidade: 3,
    preco: 4.39
  }
]

const total = item => item.quantidade * item.preco
const somar = (acc, el) => acc + el

const taxaInicial = 10

const totalGeral = carrinho
  .map(total)
  .reduce(somar, taxaInicial)

console.log(totalGeral)