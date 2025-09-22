import { useState } from "react"

const Form = ({addPerson, persons}) => {
    
    const [newName, setNewName] = useState('')
    const addContact = (event) => {
        event.preventDefault()

        const newContactObject = {
            name: newName,
            id: String(persons.length + 1)
        }
        addPerson(newContactObject)
        setNewName("")
    }

    const getNewName = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addContact}>
                <div>
                    name: <input onChange={getNewName} value={newName} type="text" placeholder="enter your name"/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form