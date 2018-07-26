// tslint:disable:no-console
import * as React from 'react'

import { Divider, Grid, Header, Icon, Image, List, Segment } from 'semantic-ui-react'
import Cover from '../images/cover.jpg'
import Me from '../images/me.jpg'

export interface ITopPageProps {
  mes: [IMe]
}

const styles = {
  cover: {
    alignItems: 'center',
    background: `url(${Cover})`,
    backgroundPosition: 'center  center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: 600,
    justifyContent: 'center',
    width: '100%',
  },
  intro: {
    alignItems: 'center',
    backgroundColor: '#5e502a',
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    justifyContent: 'center',
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  introInner: {
    // maxWidth: '50%',
  },
  root: {
    padding: 0,
  },
  whatIDo: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 600,
    paddingBottom: 0,
    paddingTop: 0,
  },
}

const TopPage = ({ mes }: ITopPageProps) => {
  console.log(mes)
  return (
    <Segment basic padded={false} className='full-width' style={styles.root}>

      <div style={styles.cover}>
        <div>
          <Image src={Me} circular centered size='tiny'/>
          <Header size='large' textAlign='center'>
            I'm Hiroaki Miura.
          </Header>
          <Header.Subheader size='large' textalign='center'>
            A Startup-minded Developer based in Tokyo.
          </Header.Subheader>
        </div>
      </div>

      <Segment basic style={styles.intro}>
        <div style={styles.introInner}>
          <Header size='large' inverted textAlign='center'>
            A Startup-minded Developer,
            A Professional Freelancer,
            10+ years experience in development of
            both Front-end and Back-end
          </Header>
          <Segment basic textAlign='center'>
            <List horizontal inverted>
              <List.Item as='a'><List.Icon name='twitter square'/>Twitter</List.Item>
              <List.Item as='a'><List.Icon name='linkedin'/>LinkedIn</List.Item>
              <List.Item as='a'><List.Icon name='github square'/>Github</List.Item>
            </List>
          </Segment>
        </div>
      </Segment>

      <Segment basic style={styles.whatIDo}>

        <Header size='large' textAlign='center'>
          <Divider hidden/>
          What I do
        </Header>

        <Grid columns={3} divided container stackable centered>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Header as='h2' icon>
                <Icon name='world'/>
                <Header.Content>
                Web
                </Header.Content>
                <Header.Subheader>
                  Static Website / SPA / PWA / React / Redux / GraphQL
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Header as='h2' icon>
                <Icon name='mobile'/>
                <Header.Content>
                Mobile
                </Header.Content>
                <Header.Subheader>
                  React Native / iOS / Android / Firebase
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Header as='h2' icon>
                <Icon name='user'/>
                <Header.Content>
                Consulting
                </Header.Content>
                <Header.Subheader>
                  System Architecture / Code Review / General Consulting
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    </Segment>
  )
}

export default TopPage
