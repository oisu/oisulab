// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { compose } from 'recompose'

import { List } from 'semantic-ui-react'
import { withCertificate } from '../enhancers/graphql'
import '../styles/App.css'

const Certificate = ({ data }: ChildDataProps<ICertificateResponse>) => {
  const { certificates } = data
  return (
    <List bulleted>
      {certificates && certificates.map(e =>
        <List.Item key={e.name}>{e.name}</List.Item>
      )}
    </List>
  )
}

export default compose(
  withCertificate(),
)(Certificate)
