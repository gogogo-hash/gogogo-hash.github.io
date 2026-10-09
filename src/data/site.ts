// All site content lives here. Edit this file to update names, projects, and links.

export type Project = {
  name: string
  description: string
  liveUrl?: string
  repoUrl: string
  tools: string[]
}

export type SiteLink = {
  label: string
  url: string
  // External links open in a new tab; internal links (like the resume page) do not.
  external: boolean
  // Optional icon shown instead of the label (the label is still used for screen readers)
  icon?: 'github' | 'linkedin'
}

export type Photo = {
  src: string
  alt: string
}

export const about: string[] = [
  "Hi, I'm Cory.",
  "I'm a software developer based in Sendai, Japan, who has spent eight years working where mistakes are expensive: government systems that handle tax and financial data, partner integrations that can't go down, and database changes that have to happen overnight without anyone noticing. That work taught me how to keep a system reliable at scale.",
  "These days, I'm applying those skills to products I build from start to finish. Packlight is an invite-only marketplace where you drop in a photo and AI drafts the listing. It's a Rails app, and I handled everything from the database to the deployment. Now I'm building CitySafe, a map of Miyagi Prefectural Police open data, because I wanted to see what the numbers say about my own neighbourhood. It's still in progress, and it will run on source-pipeline, a Python ingestion tool I wrote that I'll also use for future data projects.",
  'I like owning the whole thing, from the first schema to the deployed app, and I bring the discipline of high-stakes systems to it.',
  'Take a look at the projects tab for a closer look at the live sites and repos, or have a look at my resume if you want to see more about my government work at scale.',
]

export const profilePhoto = {
  photo: {
    src: '/Profile.jpg', // file lives in public/Profile.jpg
    alt: 'Portrait of Cory Christiansen',
  } satisfies Photo,
}

export const name = 'Cory Christiansen'

export const tagline =
  'Full-stack engineer building backend systems, data pipelines, and AI-powered apps.'

export const projects: Project[] = [
  {
    name: 'Packlight',
    description:
      'Rails app for private garage sales. Photos in, AI-written title, description and price out, shared through invite-based community pages with comments and email subscriptions.',
    liveUrl: 'https://packlight.community',
    repoUrl: 'https://github.com/gogogo-hash/packlight',
    tools: ['Ruby On Rails', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Railway', 'Docker'],
  },
  {
    name: 'CitySafe',
    description:
      'CitySafe is a civic safety app for Miyagi Prefecture. It visualizes official crime data — a weighted heatmap of theft incidents — and lets users request an AI-generated summary of crime patterns for a radius around any point on the map.',
    repoUrl: 'https://github.com/gogogo-hash/citysafe-web',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    name: 'Source-Pipeline',
    description:
      'A generic, source-agnostic Extract/Load ingestion core for building data pipelines.',
    repoUrl: 'https://github.com/gogogo-hash/source-pipeline',
    tools: ['Python', 'PostgreSQL'],
  },
]

export const links: SiteLink[] = [
  { label: 'GitHub', url: 'https://github.com/gogogo-hash', external: true, icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cory-c-30722ba7/',
    external: true,
    icon: 'linkedin',
  },
]

export const site = {
  // ...
  resumeUrl: '/resume/',
  contactInfo: {
    email: 'Contact@CoryChristiansen.dev',
    linkedin: 'https://www.linkedin.com/in/cory-c-30722ba7/',
    github: 'https://github.com/gogogo-hash',
  },
}
