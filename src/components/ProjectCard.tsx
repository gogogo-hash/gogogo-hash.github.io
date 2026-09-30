import type { Project } from '../data/site'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded border border-gray-200 p-4 shadow hover:shadow-md">
      <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      {/* Row of links at the bottom of the card, wrapping on narrow screens */}
      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-600"
        >
          Live site
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-600"
          >
            Repo
          </a>
        )}
      </div>
    </div>
  )
}
