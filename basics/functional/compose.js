// lazy

function compose (...fns) {
  return function (v) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, v)
  }
}

function upper(text) {
  return text.toUpperCase()
}

function emphasize(text) {
  return `${text}!!!`
}

function paddingIntoLetters(text) {
  return text.split('').join(' ')
}

function lower(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text.toLowerCase())
    }, 3000)
  })
}

const lessSteep = compose(
  upper,
  emphasize
)

const moreSteep = compose(
  lessSteep,
  paddingIntoLetters
)

console.log(lessSteep('Opa'))
console.log(moreSteep('Baum'))

function composeWithPromise(...fns) {
  return function (v) {
    return fns.reduce(async (acc, fn) => {
      return Promise.resolve(acc) === acc ?
        fn(await acc) :
        fn(acc)
    }, v)
  }
}

const lazyPromiseSteep = composeWithPromise(
  moreSteep,
  lower
)

lazyPromiseSteep('Oloquinho meu')
  .then(console.log)