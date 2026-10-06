import type { SiteLink } from '../data/site'

type LinkListProps = {
  links: SiteLink[]
}

export function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="rounded border border-line bg-surface px-4 py-2 font-bold text-body hover:text-accent focus:outline focus:outline-2 focus:outline-blue-600"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
