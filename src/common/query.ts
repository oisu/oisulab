import gql from 'graphql-tag'

export const getAllQuery = gql`
  query GetAllQuery {
    mes {
      name
      title
      intro
      location
      birthday
      image {
        url
      }
    }
    works {
      url
      name
    }
    experiences (orderBy: startedAt_DESC) {
      name
      description
      image {
        fileName
        handle
        url
        mimeType
        size
      }
      jobTitle
      techStack
      location
      startedAt
      endedAt
    }
    educations {
      name
      description
      image {
        url
      }
      major
      location
      startedAt
      endedAt
    }
    certificates {
      name
      certificateType
    }
  }
`
