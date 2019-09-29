const delay = (a) => new Promise(resolve => {
  setTimeout(() => {
    resolve(a + a)
  }, 2000)
})

console.log('start')
const start = async () => {
  const res = await delay(2)
  console.log(res)

  const res2 = await delay(4)
  console.log(res2)

  const res3 = await delay(res + res2)
  console.log(res3)

  return  res3
}

const a = start().then(res => {
  console.log(res)
})
console.log(a)

console.log('end')