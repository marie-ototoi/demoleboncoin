import React from 'react'
import { useParams } from 'react-router'
import { StyledMessage } from './MessageStyles'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'

function Message (props) {
  const { detailed, handleSelectMessage, message } = props
  const { body, id, subject, date, name } = message
  const handleClick = (e, messageId) => {
    handleSelectMessage(messageId)
    e.preventDefault()
  }
  // retrieves default id from url
  const { messageId } = useParams()
  return (<StyledMessage className={`Message${detailed ? ' Message__detailed' : ' Message__sampled'}${Number(messageId) === id ? ' Message__selected' : ''}`} onClick={e => handleClick(e, id)}>
    { !detailed && <p className="Message-date"><time dateTime={date}>{moment(date).fromNow()}</time></p> }
    <h1 className="Message-title"><a href={`#/messages/${id}`} onClick={e => handleClick(e, id)}>{subject}</a></h1>
    <h2 className="Message-author">from <strong>{name}</strong></h2>    
    <p className="Message-body">{detailed ? body : (body.substr(0, Math.min(body.length, 50))+'...')}</p>
    { detailed && <p className="Message-date"><time dateTime={date}>{ moment(date).format('LLLL')}</time></p> }
  </StyledMessage>)
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
