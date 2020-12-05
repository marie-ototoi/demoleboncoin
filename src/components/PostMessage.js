import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function PostMessage (props) {
  const [fields, setFields] = useState({
    name: { error: false, message: 'The name should not be empty', match: /^.+$/, label: 'Name', placeholder: 'Your name or pseudo', type: 'text', required: true },
    email: { error: false, message: 'Coder', match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, label: 'Email', placeholder: 'Your email', type: 'email', required: true },
    subject: { error: false, message: 'The topic should not be empty', match: /^.+$/, label: 'Subject', placeholder: 'Subject of your message', type: 'text', required: true },
    body: { error: false, message: 'The message should not be empty', match: /^.+$/, label: 'Message', placeholder: 'Your message', type: 'textarea', required: true }
  })
  // when a field's value changes
  const handleChange = (e, field) => {
    let regex = new RegExp(fields[field].match)
    setFields({
      ...fields,
      [field]: {
        ...fields[field],
        // if the new value does not match the condition, file an error
        error: !regex.test( e.target.value.trim()),
        // update the value
        value: e.target.value.trim()
      }
    })
    e.preventDefault()
  }
  // when the form is submit
  const handleSubmit = (e) => {
    // create new message
    let message = {
      date: (new Date()).toISOString()
    }
    Object.keys(fields).forEach(field => {
      message[field] = fields[field].value
    })
    // calls the function received in the props
    props.handlePostMessage(message)
    // prevents the browser from submitting the form
    e.preventDefault()
  }
  /* 
    In case the form for a message would be instanciated several times in the app
  */
  const [idsForm] = useState(Math.random())
  return (<Form onSubmit={handleSubmit}>
    {
      Object.keys(fields).map(field => {
        const Component = fields[field].type !== 'textarea' ? Form.Input : Form.TextArea
        return (<Form.Field key={`field_${field}_${idsForm}`}>
          <label htmlFor={`id_${field}_${idsForm}`}>{fields[field].label}</label>
          <Component
            id={`id_${field}_${idsForm}`}
            placeholder={fields[field].placeholder}
            type={fields[field].type}
            onChange={(e) => handleChange(e, field)}
            error={fields[field].error ? fields[field].message : false }
          />
        </Form.Field>)
      })
    }
    <Button
      type='submit'
      disabled={
        /* Prevents user from submitting the form if there's an error or empty value */
        (Object.keys(fields).filter(key => fields[key].error || (fields[key].required && !fields[key].value)).length !== 0)
      }
    >Submit</Button>
  </Form>)
}
PostMessage.propTypes = {
  handlePostMessage: PropTypes.func.isRequired
}
export default PostMessage
