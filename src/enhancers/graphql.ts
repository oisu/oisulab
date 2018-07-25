import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { getAllQuery } from '../common/query'

export const withAllData = () => (Component: React.ComponentType<IAllDataResponse>) =>
  compose<IAllDataResponse, {}>(
    graphql<{}, IAllDataResponse>(getAllQuery)
  )(Component)
