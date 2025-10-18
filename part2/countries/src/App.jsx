import axios from 'axios'
import { useState, useEffect } from 'react'
import countries from './countries'
const api_key = import.meta.env.VITE_SOME_KEY

const App = () => {


  const [countryName, setCountryName] = useState("")
  const [countriesData, setCountriesData] = useState(null)

  const [weather, setWeather] = useState(null)

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
        .then(async response => {
          // console.log(response.data)
          const countryData = response.data
          setCountriesData(countryData)

          try {
            console.log("country data to search weather", countryData)
            const response_1 = await axios
              .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital?.[0]}&appid=${api_key}&units=metric`)
            console.log(response_1.data)
            setWeather(response_1.data)
          } catch (error) {
            console.error('Error fetching weather data:', error)
            setWeather(null)
          }
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
          setCountriesData(null);
          setWeather(null);
        });
      
        
     
    }else {
      setWeather(null);
      setCountriesData(null)
    }
  }, [countryName])


  const handleChange = (event) => {
    setCountryName(event.target.value)
  }

  const setCountryNameToDisplay = (countryName) => {
    
    console.log('(setCountryNameToDisplay)fetching country data...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`)
        .then(async response => {
          // console.log(response.data)
          const countryData = response.data
          setCountriesData(countryData)

          try {
            const response_1 = await axios
              .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital?.[0]}&appid=${api_key}&units=metric`)
            console.log(response_1.data)
            setWeather(response_1.data)
          } catch (error) {
            console.error('Error fetching weather data:', error)
            setWeather(null)
          }
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
          setCountriesData(null);
          setWeather(null);
        });
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
            <li key={index}>{country} <button onClick={()=>setCountryNameToDisplay(country)}>Show</button></li>
            
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
          <h2>Weather in {countriesData.capital?.[0]}</h2>
          {/* <p>{weather.temp}</p> */}
        </div>
      )}
      {weather && (
        <div>
          <p>Temperature {weather.main.temp} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
         <p>Wind {weather.wind.speed} m/s</p>
        </div>
      )}

    </div>
  )
}

export default App
