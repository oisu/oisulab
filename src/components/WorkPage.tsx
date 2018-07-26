// tslint:disable:no-console
import * as React from 'react'

import { Container, Divider, Header } from 'semantic-ui-react'
import Work from './Work'

export interface IWorkPageProps {
  works: [IWork]
}

const WorkPage = ({ works }: IWorkPageProps) => {
  console.log(works)
  return (
    <Container text style={{ marginTop: '6em' }}>

      <Header as='h2'>
        <Header.Content>My Works</Header.Content>
        <Divider/>
        <Divider hidden/>

      </Header>

      <Work works={works}/>

    </Container>
  )
}

export default WorkPage
