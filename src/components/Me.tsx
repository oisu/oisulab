import * as React from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'
import '../styles/App.css'

interface IMeProps {
  me: IMe
}

const Me = ({ me }: IMeProps) => {
  return (
    <Card centered>
      <Image src={me.image.url}/>
      <Card.Content>
        <Card.Header>{me.name}</Card.Header>
        <Card.Meta>
          {me.title}
        </Card.Meta>
        <Card.Description>{me.intro}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <a>
            <Icon name='location arrow'/>
            {me.location}
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
  )
}

export default Me
