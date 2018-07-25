// tslint:disable:no-console
import * as React from 'react'

import { Container, Divider, Header } from 'semantic-ui-react'

export interface IWorkPageProps {
  works: [IWork]
}

const WorkPage = ({ works }: IWorkPageProps) => {
  console.log(works)
  return (
    <Container text style={{ marginTop: '6em' }}>

      <Header as='h2'>
        <Header.Content>My Work</Header.Content>
        <Divider/>
        <Divider hidden/>
      </Header>

      Work

    </Container>
  )
}

export default WorkPage
