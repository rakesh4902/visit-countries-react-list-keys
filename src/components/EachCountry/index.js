import './index.css'

const EachCountry = props => {
  const {countryDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countryDetails
  const countryVisit = isVisited ? 'Visited' : 'Visit'
  const onClickAddCountry = () => {
    addVisitedCountry(id)
  }

  console.log(isVisited)
  console.log(countryVisit)
  return (
    <li className="each-country">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="visited-text">{countryVisit}</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={onClickAddCountry}
        >
          {countryVisit}
        </button>
      )}
    </li>
  )
}

export default EachCountry
