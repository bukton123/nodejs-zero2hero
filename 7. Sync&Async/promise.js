const data = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 5000)
  // reject('error code')
})
console.log('start')

console.log(data)

data.then(res => {
  console.log(res)
  return 2
}).catch(err => {
  console.log(err)
})
.then(console.log)
.then((res) => {
  console.log(res)
  return 3
}).then(console.log)

console.log('end')