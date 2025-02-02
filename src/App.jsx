import CategoryNavigation from './components/CategoryNavigation'

import './App.css'

const App = () => {
  const categories = [
    'Historic & Cultural Sites',
    'Best Beaches in Puerto Rico',
    'Nature & Outdoor Activities'
  ]

  return (
    <div>
      <CategoryNavigation categories={categories} />
    </div>
  )
}
export default App
