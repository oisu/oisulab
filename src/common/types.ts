interface IWork {
  url: string,
  name: string,
}

interface IWorkResponse {
  data: {
    works: [IWork]
  }
}

interface IExperience {
  name: string,
  description: string,
  jobTitle: string,
  techStack: string,
  location: string,
  image: IImage,
  startedAt: string,
  endedAt?: string
}

interface IExperienceResponse {
  data: {
    experiences: [IExperience]
  }
}

interface IImage {
  url: string
}

interface IEducationResponse {
  data: {
    educations: [IEducation]
  }
}

interface IEducation {
  name: string,
  description: string,
  major: string,
  location: string,
  image: IImage,
  startedAt: string,
  endedAt: string
}

interface ICertificateResponse {
  data: {
    certificates: [ICertificate]
  }
}

interface ICertificate {
  name: string,
  startedAt: string,
  endedAt: string
}
