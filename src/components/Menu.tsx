import * as React from 'react'

import { Container, Image, Menu, MenuProps } from 'semantic-ui-react'
import styled, { StyledComponentClass } from 'styled-components'
import Logo from '../images/logo.png'

const StyledMenu = styled(Menu)`
  background-color: rgb(94, 80, 42) !important;
`as StyledComponentClass<MenuProps, {}>

export default () => (
  <StyledMenu inverted fixed='top'>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }}/>
        Oisu Lab
      </Menu.Item>
      <Menu.Item as='a'>Home</Menu.Item>
      <Menu.Item as='a'>Contact</Menu.Item>
    </Container>
  </StyledMenu>
)
