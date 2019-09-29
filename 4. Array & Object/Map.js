const map = new Map()

console.log(map)

map.set('name', 'wick')

console.log(map, map.get('name'))

map.set('name', 'too')
map.set('age', 26)
map.set('test', 0)

console.log(map)

map.delete('test')

console.log(map)

console.log(map.size)

map.forEach(console.log)