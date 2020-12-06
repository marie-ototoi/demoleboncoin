
export const getMessages = async(dispatchMessages) => {
  try {
    // replace with call to API
    let loadedMessages = [{
      subject: 'Shipping to Denmark?',
      name: 'bjorn kk.',
      id: 1,
      email: 'bjorn.kk@gmail.com',
      body: `Dear Marie,\n
      Is it possible to ship this guitar to Denmark?\n
      What would be the cost?\n
      Thanks!\n
      Bjorn`,
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'Tubes ampli EL34',
      name: 'pierric',
      id: 2,
      email: 'marie.destandau@gmail.com',
      body: `Salut Marie,

      J'ai bien reçu le paquet.
      
      Tout est ok, merci bcp !!

      P.
      `,
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'Small discount + shipping',
      name: 'mariedest',
      id: 3,
      email: 'john.gray@yahoo.fr',
      body: `Salut Marie,
      Could you consider a small discount if I buy several items from you?
      And is it possible to ship them together at once?
      Best,
      John
      `,
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'P',
      name: 'mdest',
      id: 4,
      email: 'marie.destandau@gmail.com',
      body: 'to be continued',
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'lorem',
      name: 'mariedest',
      id: 5,
      email: 'marie.destandau@gmail.com',
      body: 'to continue',
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'ipsum',
      name: 'mdest',
      id: 6,
      email: 'marie.destandau@gmail.com',
      body: 'to be continued',
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'lorem',
      name: 'mariedest',
      id: 7,
      email: 'marie.destandau@gmail.com',
      body: 'to continue',
      date: '2020-12-05T15:32:04.969Z'
    },
    {
      subject: 'ipsum',
      name: 'mdest',
      id: 8,
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
export const addMessage = async(dispatchMessages, messages, newMessage) => {
  // add call to API
  let newId = Math.max(...messages.map(m => m.id)) + 1
  dispatchMessages({ type: 'ADD_MESSAGE', message: { ...newMessage, id: newId } })
  return newId
}