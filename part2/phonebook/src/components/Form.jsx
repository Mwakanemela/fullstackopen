import { useState } from "react"

const Form = ({addPerson, persons}) => {
    
    const [newName, setNewName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const addContact = (event) => {
        event.preventDefault()

        if(newName !== "") {
            const newContactObject = {
                name: newName,
                id: String(persons.length + 1),
                phoneNumber: phoneNumber
            }
            
            const nameExists = persons.some(person => person.name === newName);
    
            if (nameExists) {
                alert(`${newName} is already added to phonebook`);
            } else {
                addPerson(newContactObject)
                setNewName("")
                setPhoneNumber("")
            }
            
        }else {
            alert("Every person has a name, dont be the first not to")
        }
        
    }

    const getNewName = (event) => {
        setNewName(event.target.value)
    }

    const getPhoneNUmber = (event) => {
        setPhoneNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addContact}>
                <div>
                    name: <input onChange={getNewName} value={newName} type="text" placeholder="enter your name"/>
                    <br/>
                    number: <input onChange={getPhoneNUmber} value={phoneNumber} type="number" placeholder="enter your phone number"/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form