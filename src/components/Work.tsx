import * as React from 'react'

import { Divider, Item } from 'semantic-ui-react'
import * as shortid from 'shortid'

interface IWorkProps {
  works: [IWork]
}

const Work = ({ works }: IWorkProps) => {
  return (
    <React.Fragment>
      {works && works.map(w =>
        <React.Fragment key={shortid.generate()}>
          <Item.Group divided>
            <Item>
              <Item.Image src={w.logo.url} size='tiny'/>
              <Item.Content verticalAlign='middle'>
                <Item.Header as='a'>{w.name}</Item.Header>
                <Item.Description>{w.description}</Item.Description>
                {/*<Item.Extra>*/}
                {/*{e.techStack.split(',').map(t =>*/}
                {/*<Label key={t}>{t}</Label>*/}
                {/*)}*/}
                {/*</Item.Extra>*/}
              </Item.Content>
            </Item>
          </Item.Group>
          <Divider hidden/>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Work
