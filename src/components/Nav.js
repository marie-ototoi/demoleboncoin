import React from 'react'
import { StyledNav } from './NavStyles'
// import PropTypes from 'prop-types'
import logo from './lbc-logo.svg'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Nav (props) {

  return (<StyledNav>
    <h1><img src={logo} alt="Le bon coin" /></h1>
    <Button as={ Link } to="/messages/new" color="orange">New message</Button>
  </StyledNav>)
}
Nav.propTypes = {
  
}
export default Nav
