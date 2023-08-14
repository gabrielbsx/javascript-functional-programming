function exec(fn, a, b) {
  return fn(a)(b)
}

const somarViaTerminal = a => b => console.log(a + b)

exec(somarViaTerminal, 56, 38)