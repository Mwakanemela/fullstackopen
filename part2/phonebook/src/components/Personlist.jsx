const Personlist = ({person, index}) => {
    return (
    <li>{index+1} {person.name} : {person.phoneNumber}</li>
  )
}

export default Personlist