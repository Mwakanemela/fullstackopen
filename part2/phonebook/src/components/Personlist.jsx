const Personlist = ({person, index, deletePersonContact}) => {
    return (
    <li>
      {index+1} {person.name} : {person.number}
      <button onClick={deletePersonContact}>Delete</button>
      </li>
  )
}

export default Personlist