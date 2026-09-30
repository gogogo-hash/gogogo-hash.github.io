type HeaderProps = {
  name: string
  tagline: string
}

export function Header({ name, tagline }: HeaderProps) {
  return (
    <header className="py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
      <p className="mt-3 text-lg text-gray-600">{tagline}</p>
    </header>
  )
}
