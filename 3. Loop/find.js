const data = [
  { name: "apple", price: 15 },
  { name: "banana", price: 10 },
  { name: "mango", price: 20 }
]


const result = data.find(v => {
  return v.name === 'apple'
})

console.log(result)