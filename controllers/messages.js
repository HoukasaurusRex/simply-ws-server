const Messages = require('../models/Messages')
const messages = new Messages()

exports.ping = function(client) {
  if (!client.isAlive) return client.terminate()
  client.isAlive = false
  client.ping(null, false, true)
}

exports.pong = function() {
  const client = this
  client.isAlive = true
}

exports.feed = function(client) {
  client.send(messages.getRandomMessage())
}

exports.welcome = function() {
  const welcomeMessage = `
    Welcome to a Simply Websockets Server,
    try emitting "message" for a response
  `
  return messages.generateMessage('WSS Server', welcomeMessage)
}

exports.message = function(message) {
  const client = this
  client.broadcast(message)
}

exports.broadcast = function(message) {
  const client = this
  client.broadcast(message)
}
