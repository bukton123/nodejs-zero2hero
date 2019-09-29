const a = 1

const call = (cb) => {
  cb(2)
}

console.log('start....')
call((res) =>  {
  console.log(res)
})
console.log(a)
console.log('end....')


const delay = (a) => new Promise(resolve => {
  setTimeout(() => {
    resolve(a + a)
  }, 2000)
})

const start = async () => {
  console.log(new Date())
  const delay1 = await delay(2) // 2s
  const delay2 = await delay(4) // 2s
  console.log(new Date())
  // await summary 4s

   
  // 2s
  console.log(new Date())
  const [ res1, res2 ] = await Promise.all([ delay(2), delay(4) ])

  console.log(res1, res2)
  console.log(new Date())


  // 
  const v1 = await delay(2)
  const v2 = await delay(v1)
  console.log(v2)
}

// start()

const query = (a) => new Promise(resolve => {
  setTimeout(() => {
    resolve(a + a)
  }, Math.floor((Math.random() * 5) + 1) * 1000)
})


const numbers = [1,2,3,4,5]

const mapdata = numbers.map(v => query(v))
console.log(mapdata)

Promise.all(mapdata).then(res => {
  console.log(res)
})