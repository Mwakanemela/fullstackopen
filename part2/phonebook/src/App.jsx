import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import DisplayPhoneBookUsers from './components/Display'
import Filter from "./components/Filter"

const App = () => {

  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])
  // FOR ADDING PERSONS(PEOPLE)
  const [persons, setPersons] = useState([ ]) 
  const addPerson = (newPerson) => {
    
    setPersons([...persons, newPerson]);
  };
  
// FILTERING / SEARCHING / SEARCH ENGINE
  const [filter, setFilter] = useState("")

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter
            ? persons.filter(
                              person => (person.name.toLowerCase().includes(filter.toLowerCase())  || person.phoneNumber.toString().includes(filter))
                            )
            : persons

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />

      <h3>Add a new</h3>
      <Form addPerson = {addPerson} persons={persons}/>
      
      <h2>Numbers</h2>
      
      <DisplayPhoneBookUsers personsToShow={personsToShow} />

    </div>
  )
}

export default App