// tslint:disable:no-console
import * as React from 'react'

import { Container, Divider, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'

import * as shortid from 'shortid'
import Social from './Social'
import Work from './Work'

export interface ITopPageProps {
  mes: [IMe],
  sites: [ISite],
  socials: [ISocial],
  businesses: [IBusiness],
  works: [IWork],
}

const styles = {
  businessName: {
    marginBottom: 10
  },
  cover: {
    alignItems: 'center',
    backgroundPosition: 'center center',
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
  works: {
    minHeight: 600,
    paddingBottom: 0,
    paddingTop: 0,
  }
}

const TopPage = ({ businesses, mes, sites, socials, works }: ITopPageProps) => {
  const me = mes[0]
  const site = sites[0]
  const coverStyle = {
    background: `url(${site.coverImage.url})`
  }
  return (
    <Segment basic padded={false} className='full-width' style={styles.root}>
      <div style={{ ...coverStyle, ...styles.cover }}>
        <div>
          <Image src={me && me.image.url} circular centered size='tiny'/>
          <Header size='large' textAlign='center'>
            {site.caption}
          </Header>
          <Header.Subheader size='large' textalign='center'>
            {site.subCaption}
          </Header.Subheader>
        </div>
      </div>

      <Segment basic style={styles.intro}>
        <Container basic text>
          <Header size='large' inverted textAlign='center'>
            {site.catchphrase}
          </Header>
        </Container>
        <Segment basic textAlign='center'>
          <Social socials={socials} inverted/>
        </Segment>
      </Segment>

      <Container text basic style={styles.whatIDo}>
        <Header size='large' textAlign='center'>
          <Divider hidden/>
          What I do
          <Divider hidden/>
        </Header>

        <Grid columns={3} divided container stackable centered>
          <Grid.Row>
            {businesses.map(b =>
              <Grid.Column textAlign='center' key={shortid.generate()}>
                <Header as='h2' icon>
                  <Icon name={b.iconName}/>
                  <Header.Content style={styles.businessName}>
                    {b.name}
                  </Header.Content>
                  <Header.Subheader>
                    {b.description}
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Container>

      <Divider hidden/>

      <Container text style={styles.works}>
        <Header size='large' textAlign='center'>
          <Divider hidden/>
          Recent Works
          <Divider hidden/>
        </Header>

        <Work works={works}/>
      </Container>

    </Segment>
  )
}

export default TopPage
