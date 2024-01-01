import './index.css'

const VisitedCountries = props => {
  const {countryDetails, removeVisitedCountry} = props
  const {id, name, imageUrl} = countryDetails
  const onClickRemoveCountry = () => {
    removeVisitedCountry(id)
  }
  return (
    <li className="visited-countries-list">
      <img className="visited-country-image" src={imageUrl} alt="thumbnail" />
      <div className="visited-countries-name-and-button">
        <p className="visited-country-name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
