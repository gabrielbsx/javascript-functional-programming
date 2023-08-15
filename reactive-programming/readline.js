const readline = require('readline')

function getAnswer(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer)
      rl.close()
    })
  })
}

function receiveBox() {
  console.log('Recebendo a compra!')
}

function payment() {
  console.log('Waiting for payment')
}

async function buying(o) {
  while (true) {
    const answer = await getAnswer('Client paid? (s/N/q) ')
    const answerLower = answer.toLowerCase()
    if (answerLower === 's') {
      (o ?? []).forEach(obs => obs())
    } else if (answerLower === 'q') {
      break
    }
  }
}

// register 2 observers
buying([payment, receiveBox])

// getAnswer('Baum?\nAnswer: ')
//   .then(console.log)