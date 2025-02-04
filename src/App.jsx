import { useState } from 'react'
import CategoryNavigation from './components/CategoryNavigation'
import AttractionsList from './components/AttractionsList'
import attractionsData from './data/attractions.json'
import './App.css'
import SocialMedia from './components/SocialMedia'
import socialmediaData from './data/socialmedia.json'
import puertoRicoLogo from './images/PuertoRico logo.png'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    attractionsData.categories[0]
  ) // Default category

  return (
    <div>
      <img src={puertoRicoLogo} alt="Discover Puerto Rico" />

      {socialmediaData.social_media.map((platform) => (
        <SocialMedia
          key={platform.name}
          link={platform.link}
          icon={platform.icon}
        />
      ))}
      <CategoryNavigation
        categories={attractionsData.categories}
        setSelectedCategory={setSelectedCategory}
      />
      <AttractionsList
        attractions={attractionsData.attractions}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}
export default App
