import { useState } from 'react'
import CategoryNavigation from './components/CategoryNavigation'
import AttractionsList from './components/AttractionsList'
import attractionsData from './data/attractions.json'
import './App.css'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    attractionsData.categories[0]
  ) // Default category

  return (
    <div>
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
