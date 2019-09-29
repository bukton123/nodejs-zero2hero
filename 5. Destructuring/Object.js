const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  data: {
    value: 1
  }
}

console.log(obj)

const { b: Name, data: { value: val } } = obj

console.log(Name, val, obj.data.value)

// missing 
console.log(obj.h.a)

