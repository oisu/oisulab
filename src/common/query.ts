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
    works {
      url
      name
      logo {
        url
      }
      description
      techStack
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
