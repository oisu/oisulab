// tslint:disable:no-console
import * as React from 'react'
import { ChildDataProps } from 'react-apollo'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { compose } from 'recompose'
import 'semantic-ui-css/semantic.min.css'
import { ILangContext, LangContext } from '../common/context'
import { withAllData } from '../enhancers/graphql'
import { renderWhileLoading } from '../enhancers/navigation'
import AboutPage from './AboutPage'
import Footer from './Footer'
import Loading from './Loading'
import MenuBar from './MenuBar'
import ScrollToTop from './ScrollToTop'
import TopPage from './TopPage'
import WorkPage from './WorkPage'

type Props = ChildDataProps<IAllDataResponse>
type State = ILangContext

class App extends React.Component<Props, State> {
  public setLang: (lang: string) => undefined
  constructor (props: Props) {
    super(props)
    this.setLang = (lang: string) => {
      this.setState({ lang })
      return undefined
    }
    this.state = {
      lang: 'en',
      setLang: this.setLang
    }
  }
  public render () {
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
    } = this.props

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
        <LangContext.Provider value={{ setLang: this.setLang, lang: 'jp' }}>
          <ScrollToTop>
            <Helmet>
              <title>{site.name}</title>
              <meta charSet='utf-8' />
              <meta name='title' content={site.name} />
              <meta name='description' content={site.description} />
              <meta name='author' content={me.name} />
              <meta name='keywords' content={site.keyword} />
              <meta name='url' content={site.url} />

              <meta itemProp='name' content={site.name} />
              <meta itemProp='description' content={site.description} />
              <meta itemProp='image' content={site.logo.url} />

              <meta name='og:url' content={site.url} />
              <meta name='og:type' content='profile' />
              <meta name='og:title' content={site.name} />
              <meta name='og:description' content={site.description} />
              <meta name='og:image' content={site.logo.url} />

              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:title' content={site.name} />
              <meta name='twitter:description' content={site.description} />
              <meta name='twitter:image' content={site.logo.url} />
            </Helmet>

            <MenuBar sites={sites} />

            <React.Fragment>
              <Route exact path='/' render={renderTop} />
              <Route exact path='/about' render={renderAbout} />
              <Route exact path='/work' render={renderWork} />
            </React.Fragment>

            <Footer />
          </ScrollToTop>
        </LangContext.Provider>
      </Router>
    )
  }
}

export default compose(
  withAllData(),
  renderWhileLoading(Loading),
)(App)
