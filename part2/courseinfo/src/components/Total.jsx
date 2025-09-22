const Total = (props) => {

    const {parts} = props

    // YOU CAN MAP
    let sum = 0
    parts.map(part => sum +=part.exercises  )

    // OR

    // REDUCE
    const total = parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises, 0)
    
    return (
        <p><b>total of {total} exercises</b> </p>
    )
    
}

export default Total