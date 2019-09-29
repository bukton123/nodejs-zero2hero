const arr = [1,2,3,4,5,6,7,8,9,10]


// const sum = arr.reduce((p, c) => {
//   console.log(p, c)
//   return p + c
// }, 0)

// console.log(sum)


// const arrData = [
//   { product: 'Apple', price: 100 },
//   { product: 'Banana', price: 10 },
//   { product: 'Mango', price: 20 },
// ]

const objData = {
  Apple: 100,
  Banana: 10,
  Mango: 20
}

const data = Object.keys(objData).reduce((c, v) => {

  c.push({
    name: v,
    price: objData[v]
  })

  return c
}, [])

// console.log(data)

const dataCal = [
  { id: '', name: 'test' },
  { id: '1', name: 'test1' },
  { id: '2', name: 'test2' },
  { id: '', name: 'test3' },
]

const newData = dataCal.reduce((p, c) => {
  if (c.id) {
    p.id.push(c)
  } else {
    p.notId.push(c)
  }
  return p
}, { notId: [], id: [] })

console.log(newData)