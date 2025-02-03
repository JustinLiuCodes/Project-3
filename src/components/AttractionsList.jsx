import AttractionCard from './AttractionCard'

const AttractionsList = ({ attractions }) => {
  return (
    <div>
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.id} attraction={attraction} />
      ))}
    </div>
  )
}
export default AttractionsList
