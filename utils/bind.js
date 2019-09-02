exports.broadcast = (wss, client) => {
  client.broadcast = message => {
    wss.clients.forEach(connectedClient => {
      if (connectedClient !== client) {
        if (connectedClient.room === client.room) {
          connectedClient.send(message)
        }
      }
    })
  }
}

exports.controller = (controllerSet, client) => {
  Object.entries(controllerSet).forEach(([event, controller]) => {
    client[event] = controller
  })
}
