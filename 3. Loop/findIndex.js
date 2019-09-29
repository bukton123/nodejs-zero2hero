const arr = new Array(10).fill(1)

// console.log(arr)

const val1 = arr.indexOf(1)

// console.log(val1)

const val2 = arr.findIndex(v => {
  return v === 1
})

// console.log(val2)


const val3 = [0, 2,4].indexOf(4)
// console.log(val3)

const val4 = ["test", "test2"].indexOf("test2")
// console.log(val4)

const val5 = [
  { name: "apple", price: 15 },
  { name: "banana", price: 10 },
  { name: "mango", price: 20 }
]

// console.log(val5.indexOf("apple"))

const findIndex = val5.findIndex(v => {
  return v.name === 'banana' || v.name === 'mango'
})


console.log(findIndex)

