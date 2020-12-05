
export const getMessages = async(dispatchMessages) => {
  try {
    //replace with fetch API
    let loadedMessages = [{
      subject: 'lorem',
      name: 'mariedest',
      id: 1,
      email: 'marie.destandau@gmail.com',
      body: 'to continue',
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'ipsum',
      name: 'mdest',
      id: 2,
      email: 'marie.destandau@gmail.com',
      body: 'to be continued',
      date: '2020-12-05T15:32:04.969Z'
    }]
    dispatchMessages({ type: 'LOAD_MESSAGES', messages: loadedMessages })
  }
  catch (err) {
    throw new Error('An error occured while loading messages')
  }
}

export const selectMessage = async(dispatchMessages, messageId) => {
  dispatchMessages({ type: 'SELECT_MESSAGE', messageId })
}