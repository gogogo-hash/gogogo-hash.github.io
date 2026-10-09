import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import type { Project } from '../data/site'
import { ProjectCard } from './ProjectCard'

type TabId = 'projects' | 'resume' | 'about' | 'contact'

// One place to add, remove, or rename tabs
const tabs: { id: TabId; label: string }[] = [
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

type BodyCardProps = {
  projects: Project[]
  about: string[]
  resumeUrl: string
  contactInfo: {
    email: string
    linkedin: string
    github: string
  }
}

export function BodyCard({ projects, about, resumeUrl, contactInfo }: BodyCardProps) {
  const [activeTab, setActiveTab] = useState<TabId>('about')
  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow">
        <div role="tablist" className="flex flex-wrap gap-2 border-b border-line">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={
                  isActive
                    ? 'px-4 py-2 bg-surface font-bold text-accent-text'
                    : 'px-4 py-2 bg-surface text-body'
                }
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="mt-6"
        >
          {activeTab === 'projects' && (
            // Single column on mobile, 2 columns on desktop (md and up)
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          )}

          {activeTab === 'resume' && (
            <div>
              {/* Scrollable preview of the resume page. h-96 sets the visible height; the content scrolls inside it. */}
              <iframe
                src={resumeUrl}
                title="Cory Christiansen resume"
                className="my-4 h-96 w-full rounded border border-line"
              />

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent-text hover:text-accent"
              >
                Open full resume
              </a>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="text-body space-y-4">
              {about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="text-body space-y-4">
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-3 font-bold text-accent-text hover:text-accent"
                >
                  <FaEnvelope className="h-5 w-5" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-bold text-accent-text hover:text-accent"
                >
                  <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-bold text-accent-text hover:text-accent"
                >
                  <FaGithub className="h-5 w-5" aria-hidden="true" />
                  GitHub
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
