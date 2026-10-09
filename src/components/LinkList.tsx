import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import type { SiteLink } from '../data/site'

type LinkListProps = {
  links: SiteLink[]
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
}

export function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map((link) => {
        const Icon = link.icon ? icons[link.icon] : null
        return (
          <a
            key={link.label}
            href={link.url}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-label={link.label}
            className="text-body hover:text-accent focus:outline focus:outline-2 focus:outline-blue-600"
          >
            {Icon ? <Icon className="h-6 w-6" /> : <span className="font-bold">{link.label}</span>}
          </a>
        )
      })}
    </div>
  )
}
