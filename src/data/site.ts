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
}

export type Photo = {
  src: string
  alt: string
}

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
    description: 'Rails app for private garage sales. Photos in, AI-written title, description and price out, shared through invite-based community pages with comments and email subscriptions.',
    liveUrl: 'https://packlight.community',
    repoUrl: 'https://github.com/gogogo-hash/packlight',
    tools: ['Ruby On Rails', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Railway', 'Docker'],
  },
  {
    name: 'CitySafe',
    description: 'CitySafe is a civic safety app for Miyagi Prefecture. It visualizes official crime data — a weighted heatmap of theft incidents — and lets users request an AI-generated summary of crime patterns for a radius around any point on the map.',
    repoUrl: 'https://github.com/gogogo-hash/citysafe-web',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    name: 'Source-Pipeline',
    description: 'A generic, source-agnostic Extract/Load ingestion core for building data pipelines.',
    repoUrl: 'https://github.com/gogogo-hash/source-pipeline',
    tools: ['Python', 'PostgreSQL'],
  },
]

export const links: SiteLink[] = [
  { label: 'GitHub', url: 'https://github.com/gogogo-hash', external: true },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cory-c-30722ba7/',
    external: true,
  },
  { label: 'Web Resume', url: '/resume/', external: false },
]
