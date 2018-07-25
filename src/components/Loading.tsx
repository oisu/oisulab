import * as React from 'react'

import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loading = () => (
  <Segment style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
    <Dimmer active>
      <Loader size='large' content='Loading'/>
    </Dimmer>
  </Segment>
)

export default Loading
