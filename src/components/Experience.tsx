import moment from 'moment'
// tslint:disable:no-console
import * as React from 'react'

import { Icon, Item, Label } from 'semantic-ui-react'
import '../styles/App.css'

interface IExperienceProps {
  experiences: [IExperience]
}

const formattedDate = (date?: string) => {
  return date ? moment(date).format('MMM YYYY') : 'Present'
}

const Experience = ({ experiences }: IExperienceProps) => {
  return (
    <React.Fragment>
      {experiences && experiences.map(e =>
        <Item.Group divided key={e.name}>
          <Item>
            <Item.Image src={e.image.url} size='tiny'/>
            <Item.Content verticalAlign='middle'>
              <Item.Header as='a'>{e.jobTitle}</Item.Header>
              <Item.Meta>
                <Icon name='building'/>
                <span>{e.name}</span>
              </Item.Meta>
              <Item.Meta>
                <Icon name='calendar'/>
                <span>{formattedDate(e.startedAt) + ' - ' + formattedDate(e.endedAt)}</span>
              </Item.Meta>
              <Item.Description>{e.description}</Item.Description>
              <Item.Extra>
                {e.techStack.split(',').map(t =>
                  <Label key={t}>{t}</Label>
                )}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      )}
    </React.Fragment>
  )
}

export default Experience
