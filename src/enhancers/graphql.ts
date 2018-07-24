import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { getCertificateQuery, getEducationQuery, getExperienceQuery, getWorkQuery } from '../common/query'

export const withWork = () => (Component: React.ComponentType<IWorkResponse>) =>
  compose<IWorkResponse, {}>(
    graphql<{}, IWorkResponse>(getWorkQuery)
  )(Component)

export const withExperience = () => (Component: React.ComponentType<IExperienceResponse>) =>
  compose<IExperienceResponse, {}>(
    graphql<{}, IExperienceResponse>(getExperienceQuery)
  )(Component)

export const withEducation = () => (Component: React.ComponentType<IEducationResponse>) =>
  compose<IEducationResponse, {}>(
    graphql<{}, IEducationResponse>(getEducationQuery)
  )(Component)

export const withCertificate = () => (Component: React.ComponentType<ICertificateResponse>) =>
  compose<ICertificateResponse, {}>(
    graphql<{}, ICertificateResponse>(getCertificateQuery)
  )(Component)
