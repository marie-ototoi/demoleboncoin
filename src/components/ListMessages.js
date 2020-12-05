import React from 'react'
import Message from './Message'
import PropTypes from 'prop-types'

function ListMessages (props) {  
  return (<div className="ListMessages">
    {
      props.messages.map(m => <Message key={`message${m.id}`} message={m} detailed={false} handleSelectMessage={props.handleSelectMessage} />)
    }
  </div>)
}
ListMessages.propTypes = {
  handleSelectMessage: PropTypes.func,
  messages: PropTypes.array.isRequired
}
export default ListMessages
