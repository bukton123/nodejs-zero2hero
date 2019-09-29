const arr = new Array(10).fill(1)

console.log(arr)

let total = []

arr.forEach(function(val, i) {
  // console.log(val, i)
  total.push(val + i)
}) 

console.log(total)

// bind args
// arr.forEach(console.log) 

// object
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4 
}

console.log(obj)

Object.keys(obj).forEach(v => {
  console.log(obj[v], v)
})


// Object.keys(obj).forEach(console.log)

// Object.values(obj).forEach(console.log)