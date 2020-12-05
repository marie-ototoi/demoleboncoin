import reducer from './messages'

const initialState = {
  messages: [],
  selected: undefined
}

describe('Messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })
  it('should handle SELECT_MESSAGE', () => {
    expect(reducer({}, {
      type: 'SELECT_MESSAGE',
      messageId: 24
    })).toEqual({ selected: 24 })
  })
  it('should handle ADD_MESSAGE', () => {
    expect(reducer({ messages: [{ id: 1001, body: 'lorem' }] }, {
      type: 'ADD_MESSAGE',
      message: { id: 2002, body: 'ipsum' }
    })).toEqual({ messages: [{ id: 1001, body: 'lorem' }, { id: 2002, body: 'ipsum' }] })
  })
})
