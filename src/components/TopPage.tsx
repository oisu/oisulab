// tslint:disable:no-console
import * as React from 'react'

import { Container, Divider, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'

import * as shortid from 'shortid'
import { color } from '../styles/theme'
import Customer from './Customer'

export interface ITopPageProps {
  customers: [ICustomer],
  sites: [ISite],
  socials: [ISocial],
  businesses: [IBusiness],
}

const styles = {
  businessName: {
    marginBottom: 10,
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
  customers: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 600,
    paddingBottom: 0,
    paddingTop: 0,
  },
  intro: {
    alignItems: 'center',
    backgroundColor: color.primary,
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    justifyContent: 'center',
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  root: {
    padding: 0,
  },
  spacer: {
    height: 20,
  },
  whatWeDo: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 600,
    paddingBottom: 20,
    paddingTop: 0,
  }
}

const TopPage = ({ businesses, sites, socials, customers }: ITopPageProps) => {
  const site = sites[0]
  const coverStyle = {
    background: `url(${site.coverImage.url})`
  }
  return (
    <Segment basic padded={false} className='full-width' style={styles.root}>
      <div style={{ ...coverStyle, ...styles.cover }}>
        <div>
          <Image src={site.logo && site.logo.url} size='small' centered/>
          <Header size='medium' centered>
            {site.caption}
          </Header>
        </div>
      </div>

      <Container text basic style={styles.whatWeDo}>
        <Header size='large' centered>
          <Divider hidden/>
          What we do
          <Divider hidden/>
        </Header>

        <Container style={styles.spacer} />

        <Grid columns={3} divided container stackable centered>
          <Grid.Row>
            {businesses.map(b =>
              <Grid.Column textAlign='center' key={shortid.generate()}>
                <Icon name={b.iconName} size='huge' />
                <Header as='h2' icon>
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

      <Segment basic style={styles.intro}>
        <Container basic text>
          <Header size='large' inverted textAlign='center'>
            {site.catchphrase}
          </Header>
        </Container>
      </Segment>

      <Divider hidden/>

      <Container text style={styles.customers}>
        <Header size='large' textAlign='center'>
          <Divider hidden/>
            Our customers
          <Divider hidden/>
        </Header>
        <Container style={styles.spacer} />
        <Customer customers={customers}/>
      </Container>

    </Segment>
  )
}

export default TopPage
