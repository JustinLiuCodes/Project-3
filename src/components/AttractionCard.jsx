const AttractionCard = ({ attraction }) => {
  return (
    <div className="attraction-card">
      <div className="attraction-card-wrapper">
        <img src={attraction.images[0]} alt={attraction.name} />
        <div className="attraction-card-hover">{attraction.description}</div>
      </div>

      <h3>{attraction.name}</h3>
    </div>
  )
}

export default AttractionCard
