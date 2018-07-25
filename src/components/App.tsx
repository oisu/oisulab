// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { compose } from 'recompose'
import 'semantic-ui-css/semantic.min.css'

import { Container, Dimmer, Divider, Grid, Header, Image, List, Loader, Segment } from 'semantic-ui-react'
import { withAllData } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'
import '../styles/App.css'
import Certificate from './Certificate'
import Education from './Education'
import Experience from './Experience'
import Me from './Me'
import Menu from './Menu'

const Loading = () => (
  <Segment style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
    <Dimmer active>
      <Loader size='large' content='Loading'/>
    </Dimmer>
  </Segment>
)

const App = ({ data, data: { certificates, educations, experiences, mes } }: ChildDataProps<IAllDataResponse>) => {
  const me = mes && mes[0]
  return (
    <div>
      <Menu/>

      <Container text style={{ marginTop: '5em' }}>

        <Header as='h2'>
          <Header.Content>About Me</Header.Content>
          <Divider/>
          <Divider hidden/>
        </Header>

        {me && <Me me={me}/>}

        <Header as='h1'>
          <Divider hidden/>
          <Header.Content>Experiences</Header.Content>
          <Divider/>
          <Divider hidden/>
        </Header>

        <Experience experiences={experiences}/>

        <Header as='h1'>
          <Divider hidden/>
          <Header.Content>Educations</Header.Content>
          <Divider/>
          <Divider hidden/>
        </Header>

        <Education educations={educations}/>

        <Header as='h1'>
          <Divider hidden/>
          <Header.Content>Certificates</Header.Content>
          <Divider/>
          <Divider hidden/>
        </Header>

        <Certificate certificates={certificates}/>

      </Container>

      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 1'/>
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 2'/>
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 3'/>
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Footer Header'/>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider inverted section/>
          <Image centered size='mini' src='/logo.png'/>
          <List horizontal inverted divided link>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  )
}

export default compose(
  withAllData(),
  renderWhileLoading(Loading),
)(App)
