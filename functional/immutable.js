function order (array) {
  return [...array].sort()
}
const nums = [3, 1, 7, 8, 2, 4]
const numsOrdered = order(nums)
console.log(numsOrdered)

// freeze array
const numsFreeze = Object.freeze([3, 1, 7, 8, 4])
const numsCloned = [...numsFreeze].sort()
console.log(numsCloned)

// slice is immutable
console.log(nums.slice(1), nums)