const Messages = require('./models/Messages')
const messages = new Messages()

module.exports = function(payload) {
  const client = this
  try {
    const message = JSON.parse(payload)
    if (!client[message.event]) {
      return client.send(
        messages.generateMessage(
          'Server',
          "Sorry, I haven't registered that event"
        )
      )
    }
    return client[message.event](message)
  } catch (err) {
    console.log(err)
    return client.send(
      messages.generateMessage('Server', 'Please send JSON data!')
    )
  }
}
