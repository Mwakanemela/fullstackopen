import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import DisplayPhoneBookUsers from './components/Display'
import Filter from "./components/Filter"
import phonebookService from "./services/phonebook"

const App = () => {

  useEffect(() => {
  phonebookService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  // FOR ADDING PERSONS(PEOPLE)
  const [persons, setPersons] = useState([ ]) 
  const addPerson = (newPerson) => {
    phonebookService
    .create(newPerson)
    .then(returnPerson => {
      setPersons(persons.concat(returnPerson))
    })
    // setPersons([...persons, newPerson]);
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

  //delete contact
  const deleteContactById = (id) => {
    phonebookService.deleteContact(id)
    .then(responseData => {
      setPersons(persons.filter(n => n.id !== id))
    })
  }

  const updatePhonebookByName = (newObject) => {
    console.log("update user", newObject)
      phonebookService.updateById(newObject)
      .then(responseData => {
        console.log(responseData)
        setPersons(persons.map(person => person.id === newObject.id ? responseData: person))
      })
  }
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />

      <h3>Add a new</h3>
      <Form 
        addPerson = {addPerson} persons={persons}
        updatePhonebookByName={updatePhonebookByName}
        />
      
      <h2>Numbers</h2>
      
      <DisplayPhoneBookUsers
       personsToShow={personsToShow}
       deleteContactById={deleteContactById}
        />

    </div>
  )
}

export default App