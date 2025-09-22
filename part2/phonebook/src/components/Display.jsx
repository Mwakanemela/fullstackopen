import Personlist from "./Personlist"
const DisplayPhoneBookUsers = ({personsToShow}) => {
    return (
        <div>
            <ul>
                {personsToShow.map((person, index) => 
                    <Personlist key={person.id} person={person} index={index} />
                )}
            </ul>
        </div>
    )
}

export default DisplayPhoneBookUsers