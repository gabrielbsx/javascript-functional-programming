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