import React from 'react'
import PropTypes from 'prop-types'

function Message (props) {
  const { handleSelectMessage, message } = props
  const { body, id, subject, date, name } = message

  // retrieves default ids from url  
  return (<article className="Message">
    <header>
      <h1><a href={`#/messages/${id}`} onClick={(e) => handleSelectMessage(e, id)}>{subject}</a></h1>
      <h2>from {name}</h2>
      
    </header>
    <p>{body}</p>
    <footer>
      posted <time>{date}</time>
    </footer>
  </article>)
}
Message.propTypes = {
  handleSelectMessage: PropTypes.func,
  detailed: PropTypes.bool,
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}
export default Message
