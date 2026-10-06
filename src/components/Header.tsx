import type { Photo } from '../data/site'

type HeaderProps = {
  name: string
  tagline: string
  photo: Photo
}

export function Header({ name, tagline, photo }: HeaderProps) {
  return (
    <header className="py-12">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-32 w-32 shrink-0 rounded-full object-cover object-right-top md:h-40 md:w-40"
        />
        <div>
          <h1 className="text-3xl font-bold text-heading md:text-4xl">{name}</h1>
          <p className="mt-3 text-lg text-body">{tagline}</p>
        </div>
      </div>
    </header>
  )
}
