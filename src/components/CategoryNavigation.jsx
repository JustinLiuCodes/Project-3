import CategoryNavigationButton from './CategoryNavigationButton'

const CategoryNavigation = ({ categories }) => {
  return (
    <nav>
      {categories.map((category) => (
        <CategoryNavigationButton key={category} category={category} />
      ))}
    </nav>
  )
}

export default CategoryNavigation
