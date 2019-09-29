const bcrypt = require('bcrypt')

const connection = require('../conection/db')

exports.CreateUser = (username, password, age, email) => {

  const passwordNew = bcrypt.hashSync(password, 10)
  return connection.from('users').insert({
    username,
    password: passwordNew,
    age,
    email
  })
}

exports.FindUsername = (username) => {
  return connection.from('users')
    .select('username as username')
    .where('username', username)
    .first()
}

exports.Find = search => {
  const query = connection.from('users').select('*')

  if (search) {
    query.where('username', 'like', `%${search}%`)
  }

  return query
}

exports.FindById = id => {
  return connection.from('users').select('*').where('id', id).first()
}

exports.UpdateUser = (id, email, age) => {
  return connection.from('users').update({
    email,
    age
  }).where('id', id)
}

exports.DeleteUser = id => {
  return connection.from('users').delete().where('id', id)
}

exports.FindLoginUser = username => {
  return connection.from('users')
    .select('id', 'username', 'password', 'email')
    .where('username', username)
    .first()
}