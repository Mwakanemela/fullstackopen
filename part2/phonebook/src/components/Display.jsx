import Personlist from "./Personlist"
const DisplayPhoneBookUsers = ({persons}) => {
    return (
        <div>
            <ul>
                {persons.map((person, index) => 
                    <Personlist key={person.id} person={person} index={index} />
                )}
            </ul>
        </div>
    )
}

export default DisplayPhoneBookUsers