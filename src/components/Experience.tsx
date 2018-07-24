import moment from 'moment'
// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { compose } from 'recompose'

import { Item, Label } from 'semantic-ui-react'
import { withExperience } from '../enhancers/graphql'
import '../styles/App.css'

const formattedDate = (date?: string) => {
  return date ? moment(date).format('MMM YYYY') : 'Present'
}

const Experience = ({ data }: ChildDataProps<IExperienceResponse>) => {
  const { experiences } = data
  return (
    <div>
      {experiences && experiences.map(e =>
        <Item.Group divided key={e.name}>
          <Item>
            <Item.Image src={e.image.url} size='tiny'/>
            <Item.Content verticalAlign='middle'>
              <Item.Header as='a'>{e.jobTitle}</Item.Header>
              <Item.Meta>
                <span>{e.name},</span>
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
    </div>
  )
}

export default compose(
  withExperience(),
)(Experience)
