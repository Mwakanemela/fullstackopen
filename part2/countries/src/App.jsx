import axios from 'axios'
import { useState, useEffect } from 'react'
import countries from './countries'

const App = () => {


  const [countryName, setCountryName] = useState("")
  const [countriesData, setCountriesData] = useState(null)

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(countryName.toLowerCase())
  );
  useEffect(() => {
    console.log('effect run, countryName is now', countryName)

    // skip if country is not defined
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0].toLowerCase()
      console.log('fetching country data...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(response => {
          console.log(response.data)
          setCountriesData(response.data)
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
          setCountriesData(null);
        });
    }else {

      setCountriesData(null)
    }
  }, [countryName])
  const handleChange = (event) => {
    setCountryName(event.target.value)
  }

  return (
    <div>
      <form>
        Find countries: <input value={countryName} onChange={handleChange} />
      </form>
       {countries && filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <ul>
          {filteredCountries.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      )}
      {countriesData && (
        <div>
          <h1>{countriesData.name.common}</h1>
          <p>Capital {countriesData.capital?.[0]}</p>
          <p>Area {countriesData.area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(countriesData.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img src={countriesData.flags.png} alt={`Flag of ${countriesData.name.common}`} width="100" />
        </div>
      )}
    </div>
  )
}

export default App
