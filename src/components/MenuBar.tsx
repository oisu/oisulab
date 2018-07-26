// tslint:disable:no-console
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Container, Image, Menu } from 'semantic-ui-react'
import { color } from '../common/theme'
import { openChat } from '../common/util'
import Logo from '../images/logo.png'

const MenuBar = () => (
  <Menu inverted fixed='top' style={{ background: color.primary }}>
    <Container>
      <Menu.Item as={Link} to='/' header active={false}>
        <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }}/>
        Oisu Lab
      </Menu.Item>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as={Link} to='/about'>About</Menu.Item>
      <Menu.Item as={Link} to='/work'>My Works</Menu.Item>
      <Menu.Item as='a' onClick={openChat}>Contact</Menu.Item>
    </Container>
  </Menu>
)

export default MenuBar
