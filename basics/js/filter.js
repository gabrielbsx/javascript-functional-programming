const nums = [-10, -5, 10, -3, 0, 11, 555]
const isPositive = n => n > 0
console.log(nums.filter(isPositive))

Array.prototype.myFilter = function (fn) {
  const nArr = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      nArr.push(this[i])
    }
  }
  return nArr
}

console.log(nums.myFilter(isPositive))