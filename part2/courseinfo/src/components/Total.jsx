const Total = (props) => {

    const {parts} = props

    let sum = 0
    const total = parts.map(part => sum +=part.exercises  )

    return (
        <p><b>total of {sum} exercises</b> </p>
    )
    
}

export default Total