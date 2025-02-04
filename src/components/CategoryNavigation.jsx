const CategoryNavigation = ({ categories, setSelectedCategory }) => {
  return (
    <div className="nav-subtitle">
      <h2>
        Everything Puerto Rico – Discover Its Beauty, Culture, and Adventure..
      </h2>
      <p>
        Plan your trip with ease—historic sites, stunning beaches, and outdoor
        wonders, all in one place
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
