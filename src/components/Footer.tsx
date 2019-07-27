// tslint:disable:no-console
// tslint:disable:no-debugger
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Container, List, Segment } from 'semantic-ui-react'
import { LangContext } from '../common/context'
import { openChat } from '../common/util'
import { color } from '../styles/theme'

const styles = {
  langContainer: {
    marginBottom: 30,
  },
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
    <LangContext.Consumer>
      {({ lang, setLang }) => (
        <Segment inverted vertical style={styles.root}>
          {/* <Container textAlign='center' style={styles.langContainer}>
            <Dropdown text={lang} onChange={onLangChange}>
              <Dropdown.Menu title=''>
                <Dropdown.Item text='🇺🇸English' />
                <Dropdown.Item text='🇯🇵日本語' />
              </Dropdown.Menu>
            </Dropdown>
          </Container> */}

          <Container textAlign='center'>
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
              <List.Item as='a' href='https://blog.oisulab.com' target='_blank'>
                Blog
          </List.Item>
              <List.Item as={Link} onClick={openChat} to='.' style={styles.listItem}>
                Contact
          </List.Item>
            </List>
          </Container>
        </Segment>
      )}
      </LangContext.Consumer>
  )
}

export default Footer
