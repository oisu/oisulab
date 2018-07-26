// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { compose } from 'recompose'
import 'semantic-ui-css/semantic.min.css'
import { withAllData } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'
import '../styles/App.css'
import AboutPage from './AboutPage'
import Footer from './Footer'
import Loading from './Loading'
import MenuBar from './MenuBar'
import WorkPage from './WorkPage'

const App = ({ data: { certificates, educations, experiences, mes, works } }: ChildDataProps<IAllDataResponse>) => {
  const aboutProps = {
    certificates,
    educations,
    experiences,
    mes
  }
  const workProps = {
    works
  }
  const renderAbout = () => <AboutPage {...aboutProps} />
  const renderWork = () => <WorkPage {...workProps} />
  return (
    <Router>
      <React.Fragment>
        <MenuBar/>
        <React.Fragment>
          <Route exact path='/' render={renderAbout}/>
          <Route exact path='/about' render={renderAbout}/>
          <Route exact path='/work' render={renderWork}/>
        </React.Fragment>
        <Footer/>
      </React.Fragment>
    </Router>
  )
}

export default compose(
  withAllData(),
  renderWhileLoading(Loading),
)(App)
