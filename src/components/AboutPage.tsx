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
}

const AboutPage = ({ certificates, educations, experiences, mes }: IAboutPageProps) => {
  const me = mes && mes[0]
  return (
    <Container text style={{ marginTop: '6em' }}>

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
  )
}

export default AboutPage
