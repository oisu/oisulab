import moment from 'moment'
// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { compose } from 'recompose'

import { Item, Label } from 'semantic-ui-react'
import { withEducation } from '../enhancers/graphql'
import '../styles/App.css'

const formattedDate = (date: string) => moment(date).format('MMM YYYY')

const Education = ({ data }: ChildDataProps<IEducationResponse>) => {
  const { educations } = data
  console.log(educations)
  return (
    <div>
      {educations && educations.map(e =>
        <Item.Group divided key={e.name}>
          <Item>
            <Item.Image src={e.image.url} size='tiny'/>
            <Item.Content verticalAlign='middle'>
              <Item.Header as='a'>{e.name}</Item.Header>
              <Item.Meta>
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
    </div>
  )
}

export default compose(
  withEducation(),
)(Education)
