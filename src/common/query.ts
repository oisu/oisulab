import gql from 'graphql-tag'

export const getAllQuery = gql`
  query GetAllQuery {
    sites {
      name
      description
      keyword
      url
      logo {
        url
      }
      coverImage {
        url
      }
      caption
      subCaption
      catchphrase
      address
    }
    socials {
      name
      iconName
      url
    }
    businesses {
      name
      iconName
      description
    }
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
    works (orderBy: updatedAt_DESC) {
      url
      name
      logo {
        url
      }
      description
      techStack
    }
    customers (orderBy: updatedAt_DESC) {
      logo {
        url
      }
      url
    }
    experiences (orderBy: startedAt_DESC) {
      name
      description
      image {
        url
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
