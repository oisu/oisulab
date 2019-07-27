import * as React from 'react'
import { Link } from 'react-router-dom'

import { Container, Image, Menu } from 'semantic-ui-react'
import { color } from '../styles/theme'

interface IMenuBarProps {
  sites: [ISite],
}

const styles = {
  logo: {
    marginRight: '1.5em'
  },
  root: {
    background: color.primary,
  }
}

const MenuBar = ({ sites }: IMenuBarProps) => {
  const site = sites[0]
  return (
    <Menu inverted fixed='top' style={styles.root}>
      <Container>
        <Menu.Item as={Link} to='/' header style={{ background: 'none' }}>
          <Image size='mini' src={site.logo.url} style={styles.logo}/>
          {site.name}
        </Menu.Item>
        <Menu.Item as={Link} to='/about'>About</Menu.Item>
        <Menu.Item as={Link} to='/work'>Works</Menu.Item>
        <Menu.Item as='a' href='https://blog.oisulab.com' target='_blank'>
          Blog
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default MenuBar
