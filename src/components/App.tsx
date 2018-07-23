// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { compose } from 'recompose'
import 'semantic-ui-css/semantic.min.css'

import {
  Card,
  Container,
  Dimmer,
  Divider,
  Feed,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Loader,
  Segment
} from 'semantic-ui-react'
import { withWork } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'
import Logo from '../images/logo.png'
import Me from '../images/me.jpg'
import '../styles/App.css'
import Menu from './Menu'

const Loading = () => (
  <Segment style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
    <Dimmer active>
      <Loader size='large' content='Loading'/>
    </Dimmer>
  </Segment>
)

const App = (props: ChildDataProps<IWorkResponse>) => {
  console.log(props)
  return (
    <div>
      <Menu/>

      <Container text style={{ marginTop: '7em' }}>

        <Header as='h1'>About Me</Header>

        <Card centered>
          <Image src={Me}/>
          <Card.Content>
            <Card.Header>Hiroaki Miura</Card.Header>
            <Card.Meta>
              <span className='date'>Startup-minded Engineer</span>
            </Card.Meta>
            <Card.Description>10+ years experience of development</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <a>
                <Icon name='location arrow'/>
                Kawasaki-shi, Kanagawa
              </a>
            </div>
            <div>
              <a>
                <Icon name='birthday cake'/>
                Born on May 24, 1984
              </a>
            </div>
          </Card.Content>
        </Card>

        <Header as='h1'>Experiences</Header>

        <Feed size='large'>
          <Feed.Event>
            <Feed.Label image={Me}/>
            <Feed.Content>
              <Feed.Summary>
                I launched <a>Oisu Lab</a> and started a freelance career.
                <Feed.Date>3 Months Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <Image src={Logo} verticalAlign='middle'/>
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like'/>
                  9999 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
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
  withWork(),
  renderWhileLoading(Loading),
)(App)
