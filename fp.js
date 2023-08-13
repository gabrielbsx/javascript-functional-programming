// first class functions
// higher order functions

// place-oriented programming

function waitFor(time) {
  const future = Date.now() + time
  while(Date.now() < future) {}
}

setInterval(() => console.log('Exec #01', Date.now()), 400)
setTimeout(() => {
  waitFor(3000)
  console.log('Exec #02', Date.now())
}, 300)

waitFor(5000)

console.log('fim', Date.now())
