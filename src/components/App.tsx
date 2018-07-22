// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { compose } from 'recompose'
import { withWork } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'

import logo from '../logo.svg'
import '../styles/App.css'

const Loading = () => (
  <div>{'Loading...'}</div>
)

const App = (props: ChildDataProps<IWorkResponse>) => {
  console.log(props)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <p className='App-intro'>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  )
}

export default compose(
  withWork(),
  renderWhileLoading(Loading),
)(App)
