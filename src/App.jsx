import CategoryNavigation from './components/CategoryNavigation'
import AttractionsList from './components/AttractionsList'

import attractionsData from './data/attractions.json'

import './App.css'

const App = () => {
  return (
    <div>
      <CategoryNavigation categories={attractionsData.categories} />
      <AttractionsList attractions={attractionsData.attractions} />
    </div>
  )
}
export default App
