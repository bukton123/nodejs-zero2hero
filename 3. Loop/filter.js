const arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr)

const filter = arr.filter((v, i) => {
  return v > 5 && v % 2 === 0
})

console.log(filter)

const search = ["wick", "ton"]
const data = ["word", "ton", "apple", "wick"]

const filterText = data.filter(v => {
  console.log(!!search.indexOf(v), search.indexOf(v))
  return search.indexOf(v) || search.indexOf(v) === 0
})

console.log(filterText)