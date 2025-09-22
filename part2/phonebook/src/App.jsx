import { useState } from 'react'
import Form from './components/Form'
import DisplayPhoneBookUsers from './components/Display'
const App = () => {
  
  // const [contacts, setContacts] = useState([]);

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const addPerson = (newPerson) => {
    
    setPersons([...persons, newPerson]);
  };
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson = {addPerson} persons={persons}/>
      <h2>Numbers</h2>
      <DisplayPhoneBookUsers persons={persons} />

      {/* <div>[DEBUG] {persons.name}</div> */}
    </div>
  )
}

export default App