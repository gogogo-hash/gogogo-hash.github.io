import { Header } from './components/Header'
import { BodyCard } from './components/BodyCard'
import { Footer } from './components/Footer'
import { name, tagline, projects, links, profilePhoto, about } from './data/site'
import { site } from './data/site'

function App() {
  return (
    // Centered column with comfortable padding on mobile, capped width on desktop
    <div className="mx-auto max-w-3xl px-4">
      <Header name={name} tagline={tagline} photo={profilePhoto.photo} />
      <main>
        <BodyCard
          projects={projects}
          about={about}
          resumeUrl={site.resumeUrl}
          contactInfo={site.contactInfo}
        />
      </main>
      <Footer links={links} />
    </div>
  )
}

export default App
