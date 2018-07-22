import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { getWorkQuery } from '../common/query'

export const withWork = () => (Component: React.ComponentType<IWorkResponse>) =>
  compose<IWorkResponse, {}>(
    graphql<{}, IWorkResponse>(getWorkQuery)
  )(Component)
