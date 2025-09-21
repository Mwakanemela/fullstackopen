import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
const Display = (props) => {
  return (
    <div>
      <p>{props.text} {props.total}</p>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const increaseByOne = (review) => {
    if(review === "good") {
      setGood(good + 1)
    }
    else if(review === "bad") {
      setBad(bad + 1)
    }
    else {
      setNeutral(neutral + 1)
    }
    
  }
  
  return (
    <div>
      <h1>Give Feedback</h1><br/>
      <Button onClick={() => increaseByOne("good")}  text="Good" />
      <Button onClick={() => increaseByOne("neutral")}  text="Neutral" />
      <Button onClick={() => increaseByOne("bad")}  text="Bad" />
      <br/>
      <h2>Statistics</h2>
      <Display text="Good" total={good} />
      <Display text="Neutral"  total={neutral}/>
      <Display text="Bad"  total={bad}/>
      
    </div>
  )
}
export default App
