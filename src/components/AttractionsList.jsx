import AttractionCard from './AttractionCard'

const AttractionsList = ({ attractions, selectedCategory }) => {
  const filteredAttractions = attractions.filter(
    (attraction) => attraction.category === selectedCategory
  )

  return (
    <div className="attraction-grid">
      {filteredAttractions.map((attraction) => (
        <AttractionCard key={attraction.id} attraction={attraction} />
      ))}
    </div>
  )
}
export default AttractionsList
