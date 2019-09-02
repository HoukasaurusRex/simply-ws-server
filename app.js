const uuidv1 = require('uuid/v1')
const router = require('./router')
const usersController = require('./controllers/users')
const messagesController = require('./controllers/messages')
const bind = require('./utils/bind')

/**
 *
 * @param {import('ws')} client
 * @param {Request} req
 */
function app(client, req) {
  try {
    const wss = this
    client.id = uuidv1()
    client.ip =
      req.connection.remoteAddress ||
      req.headers['x-forwarded-for'].split(/\s*,\s*/)[0]
    bind.broadcast(wss, client)
    bind.controller(messagesController, client)
    bind.controller(usersController, client)
    client.isAlive = true
    client.on('open', () => messagesController.message(id))
    client.on('pong', messagesController.pongMessage)
    client.on('message', router)
    client.on('close', usersController.disconnect)
    client.send(messagesController.welcome())
    client.feedId = setInterval(() => client.feed(), 10000)
    client.pingId = setInterval(() => client.pingMessage(), 10000)
  } catch (error) {
    console.error(error)
    client.send(error.message)
  }
}

module.exports = app
