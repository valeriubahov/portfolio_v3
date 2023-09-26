export interface UserProviderProps {
  children: React.ReactNode;
}

export interface IContext {
  user: IUser | undefined;
  isLoading: boolean;
}

export interface IDate {
  year: number;
  month: number;
  day?: number;
}
export interface IProfile {
  network: string;
  username: string;
  url: string;
}

export interface ISkill {
  name: string;
  level: string;
  keywords: string[];
  rating: number;
  yearsOfExperience: number;
}

export interface IBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string | null;
  summary: string;
  profile: IProfile[];
  headline: string;
  blog: string | null;
  yearsOfExperience: number;
  username: string;
  locationAsString: string;
  region: string;
  karma: number;
  id: string;
  followers: number;
  following: number;
  picture: string;
  website: string | null;
}

export interface IProject {
  name: string;
  description: string;
  url: string;
  highlights: string[];
  keywords: string[];
  roles: string;
  startDate: string;
  endDate: string;
  entity: string;
  type: string;
  displayName: string;
  website: string;
  summary: string;
  primaryLanguage: string;
  languages: string[];
  libraries: string[];
  githubUrl: string;
  repositoryUrl: string;
  start: IDate;
  end: IDate;
  images: string[];
  videos: string[];
}

export interface IWork {
  name: string;
  location: string;
  description: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  isCurrentRole: boolean;
  start: IDate;
  end: IDate;
  company: string;
  website: string;
}

export interface IEducation {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
  description: string;
  activities: string;
  start: IDate;
  end: IDate;
  website: string;
  gpa: string;
}

export interface ILanguage {
  language: string;
  fluency: string;
}

export interface ICertificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
  summary: string;
  fullDate: IDate;
  website: string;
}

export interface IMeta {
  note: string;
  canonical: string;
  version: string;
  lastModified: string;
}
export interface IUser {
  basics: IBasics | undefined;
  skills: ISkill[] | undefined;
  projects: IProject[] | undefined;
  work: IWork[] | undefined;
  publications: string[];
  education: IEducation[] | undefined;
  volunteer: string[];
  awards: string[];
  languages: ILanguage[] | undefined;
  interests: string[];
  references: string[];
  certificates: ICertificate[] | undefined;
  meta: IMeta | undefined;
}
