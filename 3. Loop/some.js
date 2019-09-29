const data = [false, true]

const check = data.some(v => {
  return v
})

console.log(check)

const permissionUser = ['create', 'update', 'delete']
const permissionMenu = "delete"

const allow = permissionUser.some(v => {
  return v === permissionMenu
})


console.log(allow)