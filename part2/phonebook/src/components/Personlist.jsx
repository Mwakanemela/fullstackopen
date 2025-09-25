const Personlist = ({person, index}) => {
    return (
    <li>{index+1} {person.name} : {person.number}</li>
  )
}

export default Personlist