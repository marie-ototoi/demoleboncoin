import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import PostMessage from './PostMessage'


describe('PostMessage component', () => {
  it('should render a submit button', async () => {
    const mfn = jest.fn()
    render(<PostMessage
      handlePostMessage={mfn}
    />)
    expect(await screen.findByRole('button', { name: /Submit/i })).toBeInTheDocument()
  })
  it('should DISABLE submit button if NAME field value DO NOT MATCH requirements', async () => {
    const mfn = jest.fn()
    render(<PostMessage
      handlePostMessage={mfn}
    />)
    let submit = await screen.findByRole('button', { name: /Submit/i })
    let name = await screen.findByRole('textbox', { name: /Name/i })
    let email = await screen.findByRole('textbox', { name: /Email/i })
    let subject = await screen.findByRole('textbox', { name: /Subject/i })
    let body = await screen.findByRole('textbox', { name: /Message/i })
    fireEvent.change(email, { target: { value: 'marie@ototoi.fr' } })
    fireEvent.change(subject, { target: { value: 'Bonjour' } })
    fireEvent.change(body, { target: { value: 'Merci pour le colis !' } })
    // wrong value here
    fireEvent.change(name, { target: { value: '' } })
    expect(submit.className).toContain('disabled')
    fireEvent.click(submit)
    expect(mfn).not.toHaveBeenCalled()
  })
  it('should DISABLE submit button if EMAIL field value DO NOT MATCH requirements', async () => {
    const mfn = jest.fn()
    render(<PostMessage
      handlePostMessage={mfn}
    />)
    let submit = await screen.findByRole('button', { name: /Submit/i })
    let name = await screen.findByRole('textbox', { name: /Name/i })
    let email = await screen.findByRole('textbox', { name: /Email/i })
    let subject = await screen.findByRole('textbox', { name: /Subject/i })
    let body = await screen.findByRole('textbox', { name: /Message/i })
    fireEvent.change(name, { target: { value: 'Marie D' } })
    fireEvent.change(subject, { target: { value: 'Bonjour' } })
    fireEvent.change(body, { target: { value: 'Merci pour le colis !' } })
    // wrong value here
    fireEvent.change(email, { target: { value: 'marie@o' } })
    expect(submit.className).toContain('disabled')
    fireEvent.click(submit)
    expect(mfn).not.toHaveBeenCalled()    
  })
  it('should DISABLE submit button if SUBJECT field value DO NOT MATCH requirements', async () => {
    const mfn = jest.fn()
    render(<PostMessage
      handlePostMessage={mfn}
    />)
    let submit = await screen.findByRole('button', { name: /Submit/i })
    let name = await screen.findByRole('textbox', { name: /Name/i })
    let email = await screen.findByRole('textbox', { name: /Email/i })
    let subject = await screen.findByRole('textbox', { name: /Subject/i })
    let body = await screen.findByRole('textbox', { name: /Message/i })
    fireEvent.change(name, { target: { value: 'Marie D' } })
    fireEvent.change(email, { target: { value: 'marie@ototoi.fr' } })
    fireEvent.change(body, { target: { value: 'Merci pour le colis !' } })
    // wrong value here
    fireEvent.change(subject, { target: { value: '' } })
    expect(submit.className).toContain('disabled')
    fireEvent.click(submit)
    expect(mfn).not.toHaveBeenCalled()    
  })
  it('should DISABLE submit button if BODY field value DO NOT MATCH requirements', async () => {
    const mfn = jest.fn()
    render(<PostMessage
      handlePostMessage={mfn}
    />)
    let submit = await screen.findByRole('button', { name: /Submit/i })
    let name = await screen.findByRole('textbox', { name: /Name/i })
    let email = await screen.findByRole('textbox', { name: /Email/i })
    let subject = await screen.findByRole('textbox', { name: /Subject/i })
    let body = await screen.findByRole('textbox', { name: /Message/i })
    fireEvent.change(name, { target: { value: 'Marie D' } })
    fireEvent.change(email, { target: { value: 'marie@o' } })
    fireEvent.change(subject, { target: { value: 'Bonjour' } })
    // wrong value here
    fireEvent.change(body, { target: { value: '' } })
    expect(submit.className).toContain('disabled')
    fireEvent.click(submit)
    expect(mfn).not.toHaveBeenCalled()    
  })
  it('should NOT DISABLE submit button if ALL field values DO MATCH requirements', async () => {
    const mfn = jest.fn()
    render(<PostMessage
      handlePostMessage={mfn}
    />)
    let submit = await screen.findByRole('button', { name: /Submit/i })
    let name = await screen.findByRole('textbox', { name: /Name/i })
    let email = await screen.findByRole('textbox', { name: /Email/i })
    let subject = await screen.findByRole('textbox', { name: /Subject/i })
    let body = await screen.findByRole('textbox', { name: /Message/i })
    fireEvent.change(name, { target: { value: 'Marie D' } })
    fireEvent.change(email, { target: { value: 'marie@ototoi.fr' } })
    fireEvent.change(subject, { target: { value: 'Bonjour' } })
    fireEvent.change(body, { target: { value: 'Merci pour le colis !' } })
    expect(submit.className).not.toContain('disabled')
    fireEvent.click(submit)
    expect(mfn).toHaveBeenCalled()    
  })
})
