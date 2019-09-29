function test () {

}

const dd = function () {

}

const sample = () => {

}

const total = a => {

}

const funcSum = (a, b) => a + b

console.log(funcSum(1, 3))

const funcoldSum = function (a, b) {
  return a + b
}

const funcObj = () => ({ name: 'test' })

console.log(funcObj())

const funcDest = ({ name }) => name


console.log(funcDest(funcObj()))


// [].map(v => v.map(val => v + val))

// [].map(function (v) {
//   return v.map(function(val) {
//     return v + val
//   })
// })