import CategoryNavigationButton from './CategoryNavigationButton'

const CategoryNavigation = ({ categories }) => {
  return (
    <nav>
      {categories.map((category) => (
        <CategoryNavigationButton category={category} />
      ))}
    </nav>
  )
}

export default CategoryNavigation
