import moment from 'moment'
import * as React from 'react'

import { Icon, Item, Label } from 'semantic-ui-react'

interface IEducationProps {
  educations: [IEducation]
}

const formattedDate = (date: string) => moment(date).format('MMM YYYY')

const Education = ({ educations }: IEducationProps) => {
  return (
    <React.Fragment>
      {educations && educations.map(e =>
        <Item.Group divided key={e.name}>
          <Item>
            <Item.Image src={e.image.url} size='tiny'/>
            <Item.Content verticalAlign='middle'>
              <Item.Header as='a'>{e.name}</Item.Header>
              <Item.Meta>
                <Icon name='calendar'/>
                <span>{formattedDate(e.startedAt) + ' - ' + formattedDate(e.endedAt)}</span>
              </Item.Meta>
              <Item.Description>{e.description}</Item.Description>
              <Item.Extra>
                {e.major.split(',').map(t =>
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

export default Education
