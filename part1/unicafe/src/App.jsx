import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)



const Statistics = (props) => {
  if (props.total !== 0) {
    return(
        <div>
          <p>{props.text} {props.total}</p>
        </div>
      )
  }else {
      return (
            <div>
              <p>No Feedback given</p>
            </div>
          )
  }
  
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0.0)
  const [positiveReview, setPositiveReview] = useState(0.0)

  const reviewAverage = (good, bad, neutral) => {
    const totalReviews = good + bad + neutral;
    if (totalReviews === 0) return 0; 
    setAverage(totalReviews / 3)
  }
 
  const calculatePositiveReview = (good, bad, neutral) => {
  const totalReviews = good + bad + neutral;
  if (totalReviews === 0) return 0; 
  const positivePercentage = (good / totalReviews) * 100;
  setPositiveReview(positivePercentage)
};
 
  const increaseByOne = (review) => {

    let updatedGood = good;
    let updatedBad = bad;
    let updatedNeutral = neutral;
    if(review === "good") {
      updatedGood = good + 1
      setGood(updatedGood)
    }
    else if(review === "bad") {
      updatedBad = bad + 1
      setBad(updatedBad)
    }
    else {
      updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
    }
    setTotal(total + 1) 
    
  

  calculatePositiveReview(updatedGood, updatedBad, updatedNeutral);
  reviewAverage(updatedGood, updatedBad, updatedNeutral)
    
  }
  
  return (
    <div>
      <h1>Give Feedback</h1><br/>
      <Button onClick={() => increaseByOne("good")}  text="Good" />
      <Button onClick={() => increaseByOne("neutral")}  text="Neutral" />
      <Button onClick={() => increaseByOne("bad")}  text="Bad" />
      <br/>
      <h2>Statistics</h2>

      <Statistics text="Good" total={good} />
      <Statistics text="Neutral"  total={neutral}/>
      <Statistics text="Bad"  total={bad}/>
      <Statistics text="All" total={total}/>
      <Statistics text="Average" total={average}/>
      <Statistics text="Positive" total={positiveReview}/>
    </div>
  )
}
export default App
