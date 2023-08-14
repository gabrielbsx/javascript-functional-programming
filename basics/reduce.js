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
    preco: 7.99,
    fragil: true
  },
  {
    nome: 'caderno',
    quantidade: 6,
    preco: 21.99,
    fragil: false
  },
  {
    nome: 'tesoura',
    quantidade: 3,
    preco: 4.39,
    fragil: true
  }
]

const total = item => item.quantidade * item.preco
const somar = (acc, el) => acc + el

const taxaInicial = 10

const totalGeral = carrinho
  .map(total)
  .reduce(somar, taxaInicial)

// listar frageis,total do valor, media de totais
const apenasFragil = item => item.fragil
const valorTotal = item => item.preco * item.quantidade
const mediaDosTotais = (acumulador, valor, indice, arr) => {
  if (indice === arr.length - 1) {
    return (acumulador + valor) / arr.length
  }
  return acumulador + valor
}
const mediaDoCurso = (acumulador, elemento) => {
  const novoTotal = acumulador.total + elemento
  const novaQuantidade = acumulador.quantidade + 1
  return {
    total: novoTotal,
    quantidade: novaQuantidade,
    media: novoTotal / novaQuantidade
  }
}
const valorInicial = {
  total: 0,
  quantidade: 0,
  media: 0
}

Array.prototype.myReduce = function (fn, acumulador) {
  acumulador = acumulador ? acumulador : this[0]
  for (let i = 0; i < this.length; i ++) {
    acumulador = fn(acumulador, this[i], i, this)
  }
  return acumulador
}

const desafio = carrinho
  .filter(apenasFragil)
  .map(valorTotal)
  // .reduce(mediaDosTotais)
  .myReduce(mediaDoCurso, valorInicial)

console.log(desafio)
