const obj = {
  name: 'wick',
  age: 26
}


Object.keys(obj)
Object.values(obj)
Object.freeze(obj)

obj.name = 'ton'

console.log(obj)

const newObj = { ...obj, name: 'ton' }
console.log(newObj)

const objData = {
  note: [
    "1",
    '2'
  ]
}

Object.assign(newObj, objData)

console.log(newObj)

console.log({ ...newObj, ...objData })