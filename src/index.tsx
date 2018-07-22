import ApolloClient from 'apollo-boost'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

const client = new ApolloClient({
  uri: 'https://api-apeast.graphcms.com/v1/cjjscfjvl0fz801bu3tokx3po/master'
})

const Root = (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker()
