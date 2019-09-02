const Users = require('../models/Users')
const Messages = require('../models/Messages')
const messages = new Messages()
const users = new Users()

exports.join = function(message) {
  const client = this
  const { name, room } = message
  users.removeUser(client.id)
  client.room = room
  const user = users.addUser(client.id, name, room)
  const userName = user.name || user.id
  client.broadcast(
    messages.generateMessage('Server', `${userName} has joined the fight`)
  )
}

exports.disconnect = function() {
  const client = this
  const user = users.removeUser(client.id)
  const userName = user.name || user.id
  client.broadcast(
    messages.generateMessage('Server', `${userName} has abandoned the fight`)
  )
  clearInterval(client.feedId)
  clearInterval(client.pingId)
}
