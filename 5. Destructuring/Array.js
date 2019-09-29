const arr = [1,2,3,4,5]

console.log(arr)

const [ name, age , ...params ] = arr 


console.log(arr, name, age, params)

const a = (name, age) => {
  console.log(name, age)
}


a(...arr)