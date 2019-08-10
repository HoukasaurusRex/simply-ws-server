const moment = require('moment')
const { getRandomNumberBetween } = require('../utils/math')

// TODO: add user id and message id
const sampleMessages = [
  {
    from: 'Anonymous',
    message: 'Imma steal yo gurl',
    createdAt: moment().valueOf()
  },
  {
    from: 'BadBoi96',
    message: 'Hey what is uuuup',
    createdAt: moment().valueOf()
  },
  {
    from: 'MrDad152',
    message: 'How do I turn off the internet?',
    createdAt: moment().valueOf()
  },
  {
    from: 'Fixmeadrink12',
    message: 'Goin out tonight, who wants to come?',
    createdAt: moment().valueOf()
  },
  {
    from: 'Fixmeadrink12',
    message: "I'm leaving soon, last chance to come with!",
    createdAt: moment().valueOf()
  },
  {
    from: 'Fixmeadrink12',
    message: "Please respond, I'm so lonely",
    createdAt: moment().valueOf()
  }
]

module.exports = class Messages {
  constructor() {
    this.messages = sampleMessages
  }
  addMessage(from, message) {
    this.messages.push({
      from,
      message,
      createdAt: moment().valueOf()
    })
    return JSON.stringify(message, undefined, 2)
  }
  getMessageList(room) {
    const messages = this.messages.filter(message => message.room === room)
    const namesArray = messages.map(message => message.name)
    return namesArray
  }
  getRandomMessage() {
    return JSON.stringify(
      this.messages[getRandomNumberBetween(0, this.messages.length)],
      undefined,
      2
    )
  }
  generateMessage(from, message) {
    return JSON.stringify(
      {
        from,
        message,
        createdAt: moment().valueOf()
      },
      undefined,
      2
    )
  }
  generateLocationMessage(from, latitude, longitude) {
    return JSON.stringify(
      {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
      },
      undefined,
      2
    )
  }
}
