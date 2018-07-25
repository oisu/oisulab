import * as React from 'react'

import { Container, Image, Menu, MenuProps } from 'semantic-ui-react'
import styled, { StyledComponentClass } from 'styled-components'
import Logo from '../images/logo.png'

const StyledMenu = styled(Menu)`
  background-color: #5e502a !important;
`as StyledComponentClass<MenuProps, {}>

const MenuBar = () => (
  <StyledMenu inverted fixed='top'>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }}/>
        Oisu Lab
      </Menu.Item>
      <Menu.Item as='a'>About</Menu.Item>
      <Menu.Item as='a'>Works</Menu.Item>
      <Menu.Item as='a'>Contact</Menu.Item>
    </Container>
  </StyledMenu>
)

export default MenuBar
