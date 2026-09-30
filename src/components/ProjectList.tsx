import type { Project } from '../data/site'
import { ProjectCard } from './ProjectCard'

type ProjectListProps = {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900">Live Projects</h2>
      {/* Single column on mobile, 2 columns side by side on desktop (md and up) */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
