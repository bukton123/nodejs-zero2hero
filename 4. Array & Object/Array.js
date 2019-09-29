const data = []
const arr = new Array()
const arrAss = new Array(10).fill(1, 0, 5).fill(2, 5, 10)

console.log(arrAss)

const cutArr = arrAss.splice(0, 5)

console.log(cutArr, arrAss)

const val1 = arrAss.toString()

console.log(val1)

console.log(arrAss.join('|'))


const dataVal = [1,2,3,4,5]

console.log(dataVal.shift(), dataVal)
console.log(dataVal.shift(), dataVal)

console.log(dataVal.pop(), dataVal)

const dataRef = [1,2,3,4,5]

const d = dataRef.slice(3)

console.log(dataRef, d)

dataRef.push(6)
dataRef[6] = 7

console.log(dataRef)

const v1 = [1,2,3]
const v2 = [4,5,6]

console.log(v1.concat(v2))
console.log([ ...v1, ...v2, ...[7,8]  ])
