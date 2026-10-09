import type { SiteLink } from '../data/site'
import { LinkList } from './LinkList'

type FooterProps = {
  links: SiteLink[]
}

export function Footer({ links }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-sm text-body">&copy; {new Date().getFullYear()} Cory Christiansen</p>
        <LinkList links={links} />
      </div>
    </footer>
  )
}
