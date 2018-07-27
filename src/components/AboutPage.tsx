// tslint:disable:no-console
import * as React from 'react'

import { Container, Divider, Header } from 'semantic-ui-react'
import Certificate from './Certificate'
import Education from './Education'
import Experience from './Experience'
import Me from './Me'

export interface IAboutPageProps {
  certificates: [ICertificate]
  educations: [IEducation]
  experiences: [IExperience]
  mes: [IMe]
  socials: [ISocial]
}

const styles = {
  root: {
    marginTop: '6em',
  }
}

const AboutPage = ({ certificates, educations, experiences, mes, socials }: IAboutPageProps) => {
  const me = mes && mes[0]
  return (
    <Container text style={styles.root}>

      <Header as='h2'>
        <Header.Content>About Me</Header.Content>
        <Divider hidden/>
      </Header>

      <Me me={me} socials={socials}/>

      <Divider hidden/>

      <Header as='h1'>
        <Divider hidden/>
        <Header.Content>Experiences</Header.Content>
        <Divider hidden/>
      </Header>

      <Experience experiences={experiences}/>

      <Divider hidden/>

      <Header as='h1'>
        <Divider hidden/>
        <Header.Content>Educations</Header.Content>
        <Divider hidden/>
      </Header>

      <Education educations={educations}/>

      <Divider hidden/>

      <Header as='h1'>
        <Divider hidden/>
        <Header.Content>Certificates</Header.Content>
        <Divider hidden/>
      </Header>

      <Certificate certificates={certificates}/>

    </Container>
  )
}

export default AboutPage
