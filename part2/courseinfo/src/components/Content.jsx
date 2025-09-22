import Part from "./Part"

const Content = (props) => {
    const {parts} = props
    return (
       
        <div>
            {parts.map(part => {
                
                    return <Part key={part.id} part={part} />
                })
            }
            
        </div>
    )
}

export default Content