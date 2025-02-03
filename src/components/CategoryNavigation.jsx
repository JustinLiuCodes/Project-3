const CategoryNavigation = ({ categories, setSelectedCategory }) => {
  return (
    <nav>
      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </nav>
  )
}

export default CategoryNavigation
