import type { SiteLink } from '../data/site'

type LinkListProps = {
  links: SiteLink[]
}

export function LinkList({ links }: LinkListProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900">Links</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="rounded border border-gray-200 px-4 py-2 font-bold text-blue-600 hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-blue-600"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
