const arr = [1,2,3,4,5]

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

// for loop array
for (let a = 0; a < arr.length; a++) {
  // console.log(arr[a])
}

// array output index
for (let val in arr) {
  // console.log(val)
}

// array output value
for (let val of arr) {
  // console.log(val)
}

// for loop object output key
for (let val in obj) {
  // console.log(val)
}

// for loop object output value
for (let val in obj) {
  // console.log(obj[val])
}