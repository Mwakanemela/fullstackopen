import Personlist from "./Personlist"
const DisplayPhoneBookUsers = ({personsToShow, deleteContactById}) => {
    const deletePersonContact = (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this contact?');
        console.log("received ",id, confirmed)

        if (!confirmed) return;
        deleteContactById(id)
    }
    // console.log(personsToShow)
    return (
        <div>
            <ul>
                {personsToShow.map((person, index) => 
                    <Personlist 
                        key={person.id} person={person} index={index}
                        deletePersonContact={() => deletePersonContact(person.id)}
                        />
                )}
            </ul>
        </div>
    )
}

export default DisplayPhoneBookUsers