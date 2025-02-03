const AttractionCard = ({ attraction }) => {
  return (
    <div>
      <img src={attraction.images[0]} alt={attraction.name} />
      <h3>{attraction.name}</h3>
    </div>
  )
}

export default AttractionCard
