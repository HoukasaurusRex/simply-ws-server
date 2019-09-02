const Messages = require('../models/Messages')
const messages = new Messages()

exports.pingMessage = function() {
  const client = this
  if (!client.isAlive) return client.terminate()
  client.isAlive = false
  client.ping(null)
}

exports.pongMessage = function() {
  const client = this
  client.isAlive = true
}

exports.welcome = function() {
  const welcomeMessage = `
    Welcome to a Simply Websockets Server,
    try emitting "message" for a response
  `
  return messages.generateMessage('Server', welcomeMessage)
}

exports.feed = function() {
  const client = this
  client.send(messages.getRandomMessage())
}

exports.message = function(message) {
  const client = this
  client.broadcast(message)
}

exports.echo = function(message) {
  const client = this
  client.send(messages.generateMessage('Server', message.text))
}
