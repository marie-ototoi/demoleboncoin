import { useHistory } from 'react-router-dom'
import React, { useEffect, useState, useReducer, useRef } from 'react'
import { useParams } from 'react-router'
import ListMessages from './ListMessages'
import Nav from './Nav'
import Message from './Message'
import PostMessage from './PostMessage'
import messagesReducer from '../reducers/messages'
import { getMessages, addMessage } from '../reducers/actions'
import { StyledWrapper } from './WrapperStyles'

function App() {
  // init messages reducer with default values
  const [messages, dispatchMessages] = useReducer(messagesReducer, {
    messages: [],
    selected: undefined
  })
  // retrieves default ids from url
  const { messageId } = useParams()
  const message = messageId ? messages.messages.find(m => m.id === Number(messageId)) : undefined
  // init error handler
  const [error, setError] = useState('')
  // utilities
  const history = useHistory()
  console.log(history)
  
  // loads message
  useEffect(() => {
    getMessages(dispatchMessages).catch((err) => { setError(err.toString()) })
  }, [])
  // show message
  const handleSelectMessage = (id) => {
    history.push({ pathname: `/messages/${id}` })
  }
  // post message
  const handlePostMessage = (newMessage) => {
    addMessage(dispatchMessages, messages.messages, newMessage)
      .then(newId => {
        history.push({ pathname: `/messages/${newId}` })
      })
      .catch((err) => { setError(err.toString()) })
  }
  return (
    <div className="App">
      <Nav />
      { (error !== '') &&
        <div className='App-error'>{error}</div>
      }
      <StyledWrapper>
        <ListMessages messages={messages.messages} handleSelectMessage={handleSelectMessage} />
        { message && /* Detail of a message */
          <Message message={message} detailed={true} handleSelectMessage={handleSelectMessage} />
        }
        { !message && /* Form to post a new message */
          <PostMessage handlePostMessage={handlePostMessage} />
        }
      </StyledWrapper>
    </div>
  )
}

export default App
