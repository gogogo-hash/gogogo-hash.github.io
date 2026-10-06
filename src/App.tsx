import { Header } from './components/Header'
import { ProjectList } from './components/ProjectList'
import { Footer } from './components/Footer'
import { name, tagline, projects, links, profilePhoto } from './data/site'

function App() {
  return (
    // Centered column with comfortable padding on mobile, capped width on desktop
    <div className="mx-auto max-w-3xl px-4">
      <Header name={name} tagline={tagline} photo={profilePhoto.photo} />
      <main>
        <ProjectList projects={projects} />
      </main>
      <Footer links={links} />
    </div>
  )
}

export default App
