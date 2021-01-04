import * as React from 'react'

import { Container, Divider, Header } from 'semantic-ui-react'
import Work from './Work'

export interface IWorkPageProps {
  works: [IWork]
}

const styles = {
  root: {
    marginTop: '6em',
  }
}

const WorkPage = ({ works }: IWorkPageProps) => {
  return (
    <Container text style={styles.root}>

      <Header as='h2'>
        <Header.Content>Past personal works</Header.Content>
        <Divider hidden/>

      </Header>

      <Work works={works}/>

    </Container>
  )
}

export default WorkPage
