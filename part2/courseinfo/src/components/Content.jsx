import Part from "./Part"
import Total from "./Total"

const Content = (props) => {
    const {parts} = props
    return (
       
        <div>
            {parts.map(part => <Part key={part.id} part={part} />  )}        
            <Total parts={parts} />
        </div>
    )
}

export default Content