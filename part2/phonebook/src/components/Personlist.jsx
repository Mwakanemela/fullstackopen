const Personlist = ({person, index}) => {
    return (
    <li>{index+1} {person.name}</li>
  )
}

export default Personlist