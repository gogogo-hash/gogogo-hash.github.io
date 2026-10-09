import type { Project } from '../data/site'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow hover:shadow-md">
      <h3 className="text-xl font-bold text-heading">{project.name}</h3>
      <p className="mt-2 text-body">{project.description}</p>
      {/* Tools used, shown as small tags */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <li key={tool} className="rounded-lg bg-tag px-2 py-1 text-sm text-body">
            {tool}
          </li>
        ))}
      </ul>
      {/* Row of links at the bottom of the card, wrapping on narrow screens */}
      <div className="mt-4 flex flex-wrap gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent-text hover:text-accent focus:outline focus:outline-2 focus:outline-blue-600"
          >
            Live site
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-accent-text hover:text-accent focus:outline focus:outline-2 focus:outline-blue-600"
        >
          Repo
        </a>
      </div>
    </div>
  )
}
