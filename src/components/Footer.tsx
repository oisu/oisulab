import * as React from 'react'
import { Link } from 'react-router-dom'

import { Container, Image, List, Segment } from 'semantic-ui-react'
import { openChat } from '../common/util'
import { color } from '../styles/theme'

const styles = {
  listItem: {
    color: 'rgba(255,255,255,.9)',
  },
  root: {
    background: color.primary,
    margin: '2em 0em 0em',
    padding: '3em 0em'
  },
}

const Footer = () => {
  return (
    <Segment inverted vertical style={styles.root}>
      <Container textAlign='center'>
        <Image centered size='mini' src=''/>
        <List horizontal inverted divided link>
          <List.Item as={Link} to='/' style={styles.listItem}>
            Home
          </List.Item>
          <List.Item as={Link} to='/about' style={styles.listItem}>
            About
          </List.Item>
          <List.Item as={Link} to='/work' style={styles.listItem}>
            Works
          </List.Item>
          <List.Item as={Link} onClick={openChat} to='.' style={styles.listItem}>
            Contact
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

export default Footer
