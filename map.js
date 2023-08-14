const nums = [1, 2, 3, 4, 5]
const dobro = (num, index, arr) => num * 2 + index + arr.length
console.log(nums.map(dobro))

Array.prototype.myMap = function (fn) {
  const mapped = []
  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this)
    mapped.push(result)
  }
  return mapped
}

console.log(nums.myMap(dobro))