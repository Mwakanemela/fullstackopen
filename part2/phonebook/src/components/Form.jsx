import { useState } from "react"

const Form = ({addPerson, persons, updatePhonebookByName}) => {
    
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const addContact = (event) => {
        event.preventDefault()

        if(newName !== "" && number !== "") {
            const newContactObject = {
                name: newName,
                number: number
            }
            
            // const nameExists = persons.some(person => person.name === newName);
            const nameExists = persons.find(person => person.name === newName);
    
            if (nameExists) {
                // console.log(nameExists)
                const confirmed = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
                if(!confirmed) return
                newContactObject["id"] = nameExists.id
                // console.log(newContactObject)
                updatePhonebookByName(newContactObject)
            } else {
                addPerson(newContactObject)
                setNewName("")
                setNumber("")
            }
            
        }else {
            alert("Every person has a name and a number somehow, dont be the first not to")
        }
        
    }

    const getNewName = (event) => {
        setNewName(event.target.value)
    }

    const getNumber = (event) => {
        setNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addContact}>
                <div>
                    name: <input onChange={getNewName} value={newName} type="text" placeholder="enter your name"/>
                    <br/>
                    number: <input onChange={getNumber} value={number} type="number" placeholder="enter number"/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form