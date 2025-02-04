import { useState } from 'react'
import CategoryNavigation from './components/CategoryNavigation'
import AttractionsList from './components/AttractionsList'
import attractionsData from './data/attractions.json'
import './App.css'
import SocialMedia from './components/SocialMedia'
import socialmediaData from './data/socialmedia.json'
import puertoRicoLogo from './images/PuertoRico logo.svg'
import puertoRicoVideo from './images/PuertoRico_video.mp4'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    attractionsData.categories[0]
  ) // Default category

  return (
    <div>
      <video autoPlay loop muted playsInline className="background-video">
        <source src={puertoRicoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav>
        <div className="nav-wrapper">
          <img
            className="logo"
            src={puertoRicoLogo}
            alt="Discover Puerto Rico"
          />
          <div className="social-media-wrapper">
            {socialmediaData.social_media.map((platform) => (
              <SocialMedia
                key={platform.name}
                link={platform.link}
                icon={platform.icon}
              />
            ))}
          </div>

          <CategoryNavigation
            categories={attractionsData.categories}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </nav>
      <section className="main-body-wrapper">
        <AttractionsList
          attractions={attractionsData.attractions}
          selectedCategory={selectedCategory}
        />
      </section>
    </div>
  )
}
export default App
