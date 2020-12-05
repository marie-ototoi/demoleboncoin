import React from 'react'
// import PropTypes from 'prop-types'
import { useParams } from 'react-router'

function Message (props) {
  // retrieves default ids from url
  const { messageId } = useParams()
  
  return (<div>
    {messageId}
  </div>)
}
Message.propTypes = {
  
}
export default Message
