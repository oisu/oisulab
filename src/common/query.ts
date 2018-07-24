import gql from 'graphql-tag'

export const getWorkQuery = gql`
  query GetWork {
    works {
      url
      name
    }
  }
`

export const getExperienceQuery = gql`
  query GetExperience {
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
  }
`

export const getEducationQuery = gql`
  query GetEducation {
    educations {
      name
      description
      image {
        fileName
        handle
        url
        mimeType
        size
      }
      major
      location
      startedAt
      endedAt
    }
  }
`

export const getCertificateQuery = gql`
  query GetCertificate {
    certificates {
      name
    }
  }
`
