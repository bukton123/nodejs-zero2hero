const arr = new Array(10).fill(1)

const map = arr.map((v, i) => {
  return {
    index: i,
    value: v
  }
})

console.log(map)

// object
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4 
}

console.log(obj)

console.log(Object.keys(obj), obj)

const objMap = Object.keys(obj).map(v => {
  return obj[v]
})

console.log(objMap)