import gql from 'graphql-tag'

export const getWorkQuery = gql`
  query GetWork {
    works {
      url
      title
    }
  }
`
