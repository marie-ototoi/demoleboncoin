export default function reducer (state, action) {
  switch (action.type) {
  case 'SELECT_MESSAGE':
    return {
      ...state,
      selected: action.messageId
    }
  case 'LOAD_MESSAGES':
    return {
      ...state,
      messages: action.messages
    }
  case 'ADD_MESSAGE':
    return {
      ...state,
      messages: [
        ...state.messages, 
        action.message
      ]
    }
  default:
    return state
  }
}
  