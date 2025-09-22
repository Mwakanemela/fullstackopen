import { useState } from 'react'
import Form from './components/Form'
import DisplayPhoneBookUsers from './components/Display'
import Filter from "./components/Filter"

const App = () => {

  // FOR ADDING PERSONS(PEOPLE)
  const [persons, setPersons] = useState([
    { 
      phoneNumber: 1234,
      name: 'Arto Hellas',
      id: 1
     },
     { 
      phoneNumber: 9876,
      name: 'Mwakanemela Kayange',
      id: 2
     },
     { 
      phoneNumber: 4567,
      name: 'Hello World',
      id: 3
     }
  ]) 
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