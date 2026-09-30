import { Header } from './components/Header'
import { ProjectList } from './components/ProjectList'
import { LinkList } from './components/LinkList'
import { Footer } from './components/Footer'
import { name, tagline, projects, links } from './data/site'

function App() {
  return (
    // Centered column with comfortable padding on mobile, capped width on desktop
    <div className="mx-auto max-w-3xl px-4">
      <Header name={name} tagline={tagline} />
      <main>
        <ProjectList projects={projects} />
        <LinkList links={links} />
      </main>
      <Footer />
    </div>
  )
}

export default App
