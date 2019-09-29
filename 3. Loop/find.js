const data = [
  { name: "apple", price: 15 },
  { name: "banana", price: 10 },
  { name: "mango", price: 20 }
]


const result = data.find(v => {
  return v.name === 'd'
})

console.log(result)

const dataStore = [
  { name: 'lotus', id: 1 },
  { name: 'big c', id: 2 }
]

const dataProduct = [
  { storeId: 1, name: 'm100', price: 10 },
  { storeId: 2, name: 'deedoo', price: 6 },
  { storeId: 1, name: 'coke', price: 10 },
  { storeId: 1, name: 'peepo', price: 2 },
  { storeId: 3, name: 'peepo', price: 3 },
]

const mapData = dataProduct.map(v => {
  const find = dataStore.find(val => {
    return val.id === v.storeId
  })

  // if (find) {
  //   v.storeName = find.name
  //   return v
  // } else {
  //   v.storeName = ''
  //   return v
  // }


  v.storeName = find ? find.name : ''
  return v
})


console.log(mapData)
  