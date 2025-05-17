export type Human = {
  name: string;
  crumbs: Crumb[];
  summaryImage: string;
  summaryDescription: string;
  propertyGroups: PropertyGroup[];
  tags: string[];
  projects: Project[];
  quickActions: QuickAction[];
  ctas: Cta[];
  playlists: Playlist[];
  socials: Social[];
  descriptionComponent: any;
  languages: LanguageSupport[];
  contentDescriptors: string[];
  interactiveElements: string[];
  awards: Award[];
};

type Crumb = {
  name: string;
  alert: string;
};

type Property = {
  name: string;
  value: string;
  link?: string;
};

type PropertyGroup = Property[];

type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
};

type QuickAction = {
  text: string;
  link: string;
};

type Cta = {
  title: string;
  description: string;
  button: string;
  cost: number;
  link: string;
};

type Playlist = {
  year: number;
  quarter: number;
  link: string;
};

type Social = {
  name: string;
  description: string;
  icon: any;
  link?: string;
  alertMessage?: string;
};

type LanguageSupport = {
  name: string;
  proficiency: LanguageProficiency;
};

export const languageProficiencyValues = ["beginner", "intermediate", "advanced"] as const;

type LanguageProficiency = (typeof languageProficiencyValues)[number];

type Award = {
  name: string;
  image: string;
  link: string;
};
