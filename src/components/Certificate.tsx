import * as R from 'ramda'
// tslint:disable:no-console
import * as React from 'react'
import { Divider, Header, List } from 'semantic-ui-react'
import '../styles/App.css'

interface ICertificateProps {
  certificates: [ICertificate]
}

const Certificate = ({ certificates }: ICertificateProps) => {
  const certMap = R.groupBy((c: ICertificate) => c.certificateType)(certificates)
  const certTypes = R.keys(certMap)
  console.log(certMap)
  return (
    <div>
      {certTypes && certTypes.map((key) =>
        <span key={key}>
          <Header size='medium'>{key}</Header>
          <List bulleted>
            {certMap[key].map((c: ICertificate) =>
              <List.Item key={c.name}>{c.name}</List.Item>
            )}
          </List>
          <Divider hidden/>
        </span>
      )}
    </div>
  )
}

export default Certificate
