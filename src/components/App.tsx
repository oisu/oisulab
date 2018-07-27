// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { compose } from 'recompose'
import 'semantic-ui-css/semantic.min.css'
import { withAllData } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'
import AboutPage from './AboutPage'
import Footer from './Footer'
import Loading from './Loading'
import MenuBar from './MenuBar'
import ScrollToTop from './ScrollToTop'
import TopPage from './TopPage'
import WorkPage from './WorkPage'

const App = (props: ChildDataProps<IAllDataResponse>) => {
  const {
    data: {
      businesses,
      certificates,
      educations,
      experiences,
      mes,
      works,
      sites,
      socials,
    }
  } = props

  const aboutProps = {
    certificates,
    educations,
    experiences,
    mes,
    sites,
    socials,
  }
  const workProps = {
    works,
  }
  const topProps = {
    businesses,
    mes,
    sites,
    socials,
    works,
  }

  const renderTop = () => <TopPage {...topProps} />
  const renderAbout = () => <AboutPage {...aboutProps} />
  const renderWork = () => <WorkPage {...workProps} />

  const site = sites[0]
  const me = mes[0]

  return (
    <Router>
      <ScrollToTop>
        <Helmet>
          <meta charSet='utf-8'/>
          <meta property='og:image' content={site.logo.url} />
          <meta property='og:description' content={site.description} />
          <meta property='og:author' content={me.name} />
          <title>{site.name}</title>
        </Helmet>
        <MenuBar sites={sites}/>
        <React.Fragment>
          <Route exact path='/' render={renderTop}/>
          <Route exact path='/about' render={renderAbout}/>
          <Route exact path='/work' render={renderWork}/>
        </React.Fragment>
        <Footer/>
      </ScrollToTop>
    </Router>
  )
}

export default compose(
  withAllData(),
  renderWhileLoading(Loading),
)(App)
