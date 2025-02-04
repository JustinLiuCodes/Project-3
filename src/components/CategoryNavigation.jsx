const CategoryNavigation = ({ categories, setSelectedCategory }) => {
  return (
    <div className="nav-subtitle">
      <h2>Discover the beauty, culture, and adventure of Puerto Rico.</h2>
      <p>
        Explore its historic sites, stunning beaches, and outdoor wonders—all in
        one place.
      </p>
      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryNavigation
