const usersController = require('./controllers/users')
const messagesController = require('./controllers/messages')
const bind = require('./utils/bind')

function app(client) {
  try {
    const wss = this
    bind.broadcast(wss, client)
    client.isAlive = true
    client.on('pong', messagesController.pong)
    client.on('broadcast', messagesController.broadcast)
    client.on('message', messagesController.message)
    client.on('join', usersController.join)
    client.on('close', usersController.disconnect)
    client.send(messagesController.welcome())
    setInterval(() => messagesController.feed(client), 10000)
    setInterval(() => messagesController.ping(client), 10000)
  } catch (error) {
    console.error(error)
    client.send(error.message)
  }
}

module.exports = app
