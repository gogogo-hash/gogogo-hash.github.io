// All site content lives here. Edit this file to update names, projects, and links.

export type Project = {
  name: string
  description: string
  liveUrl: string
  repoUrl?: string
}

export type SiteLink = {
  label: string
  url: string
  // External links open in a new tab; internal links (like the resume page) do not.
  external: boolean
}

export const name = 'Cory Christiansen'

export const tagline =
  'Full-stack engineer building backend systems, data pipelines, and AI-powered apps.'

export const projects: Project[] = [
  // TODO: replace placeholder projects
  {
    name: 'Project One',
    description: 'A placeholder project waiting for a real description.',
    liveUrl: '#',
    repoUrl: 'https://github.com/gogogo-hash',
  },
  // TODO: replace placeholder projects
  {
    name: 'Project Two',
    description: 'Another placeholder project waiting for a real description.',
    liveUrl: '#',
  },
  // TODO: replace placeholder projects
  {
    name: 'Project Three',
    description: 'A third placeholder project waiting for a real description.',
    liveUrl: '#',
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
