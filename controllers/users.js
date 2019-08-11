const Users = require('../models/Users')
const users = new Users()

exports.join = function(message, done) {
  const client = this
  // TODO: room management
  const { name, room } = message
  users.removeUser(client.id)
  users.addUser(client.id, name, room)
}

exports.disconnect = function() {
  const client = this
  console.log(`Client ${client.id} disconnected`)
}
