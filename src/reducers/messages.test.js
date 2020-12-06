import reducer from './messages'

const initialState = {
  messages: []
}

describe('Messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })
  it('should handle LOAD_MESSAGES', () => {
    expect(reducer({ messages: [{ id: 1001, body: 'lorem' }] }, {
      type: 'LOAD_MESSAGES',
      messages: [{ id: 3422, body: 'lorem' }, { id: 2002, body: 'ipsum' }]
    })).toEqual({ messages: [{ id: 3422, body: 'lorem' }, { id: 2002, body: 'ipsum' }] })
  })
  it('should handle ADD_MESSAGE', () => {
    expect(reducer({ messages: [{ id: 1001, body: 'lorem' }] }, {
      type: 'ADD_MESSAGE',
      message: { body: 'ipsum', id: 1002 }
    })).toEqual({ messages: [{ id: 1001, body: 'lorem' }, { id: 1002, body: 'ipsum' }] })
  })
})
