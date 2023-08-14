function yesOrNot(value, chance) {
  return new Promise((resolve, reject) => {
    //try {
    if (Math.random() < chance) {
      reject('Error')
    } else {
      resolve(value)
    }
    //} catch (e) {
    // resolve(e)
    //}
  })
}

yesOrNot('test', 0.9)
  .then(console.log)
  .then(
    v => consol.log(v),
    err => console.log('teste')
  )
  .catch(console.error)
  .then(() => console.log('end'))