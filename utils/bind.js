exports.broadcast = (wss, client) => {
  client.broadcast = message => {
    wss.clients.forEach(connectedClient => {
      if (connectedClient !== client) {
        connectedClient.send(message)
      }
    })
  }
}
