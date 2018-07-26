interface Window {
  fcWidget: {
    open (): void
  }
}

interface IWork {
  url: string,
  name: string,
}

interface IAllDataResponse {
  data: {
    works: [IWork]
    educations: [IEducation],
    certificates: [ICertificate],
    experiences: [IExperience],
    mes: [IMe],
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

interface IImage {
  url: string
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

interface ICertificate {
  name: string,
  certificateType: string,
  startedAt: string,
  endedAt: string
}

interface IMe {
  name: string,
  title: string,
  intro: string,
  location: string,
  birthday: string,
  image: IImage,
}
