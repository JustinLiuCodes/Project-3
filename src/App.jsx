import CategoryNavigation from './components/CategoryNavigation'

import attractionsData from './data/attractions.json'

import './App.css'

const App = () => {
  return (
    <div>
      <CategoryNavigation categories={attractionsData.categories} />
    </div>
  )
}
export default App
