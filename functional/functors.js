// wrapper
// functors is objs that impl function map
// and wrapper any value

const nums = [1, 2, 3, 4, 5, 6]

// array is a functors
const nNums = nums
  .map(el => el + 10)
  .map(el => el * 2)

console.log(nNums)

function safeType(value) {
  return {
    value,
    isInvalid() {
      return this.value === null || this.value === undefined
    },
    map(fn) {
      if (this.isInvalid()) {
        return safeType(null)
      } else {
        const nValue = fn(this.value)
        return safeType(nValue)
      }
    },
    flatMap(fn) {
      return this.map(fn).value
    }
  }
}

const res = safeType('Esse é um texto')
  .map(t => t.toUpperCase())
  .map(t => `${t}!!!!`)
  // .map(t => null)
  .flatMap(t => t.split('').join(' '))

console.log(res)

// flatMap
const letters = [
  ['a', 'o', ['b', ['a']]],
  [' '],
  [[[['b']]], 'a', 'u', 'm']
]

const resLetters = letters
  .flat(Infinity)
  .flatMap(l => [l, ' '])
  .reduce((a, b) => a + b)

console.log(resLetters)


