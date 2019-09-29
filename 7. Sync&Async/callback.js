console.log('start...')

// setTimeout (() => {
//   console.log('hello 2s')
// }, 2000)

// ture = call < cb < true

const call = (cb) => {
  for (let val in new Array(100000).fill(1)) {
    // ... condition
  }

  console.log(typeof cb)
  return cb('success')
}

const a = call((res) => {
  console.log(res)
  return true
})

console.log(a)

const sum = (a, b, cb) => cb(a + b)

const total = sum(1, 2, (res) => {
  return sum(res, 2, (res) => {
    return sum(res, 2, res => {
      return sum(res, 2, res => {
        return sum(res, 2, res => {
          return sum(res, 2, res => {
            return res
          }) 
        })
      })
    })
  })
})

console.log(total)

console.log('end...')