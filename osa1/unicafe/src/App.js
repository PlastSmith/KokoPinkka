import React, { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {
  if (props.count > 0) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={props.good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={props.neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={props.bad} />
            </tr>
            <tr>
              <StatisticLine text="count" value={props.count} />
            </tr>
            <tr>
              <StatisticLine text="average" value={props.avg} />
            </tr>
            <tr>
              <StatisticLine text="positive" value={(props.goodPct + ' %')} />
            </tr>
          </tbody>
        </table>
      </>
    )
  }
  return (
    <div>
      no statistics
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [count, setCount] = useState(0)
  const [goodPct, setGoodPct] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    setCount(count + 1)
    setAvg(((good + 1) - (bad)) / (count + 1))
    setGoodPct((good + 1) / (count + 1) * 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setCount(count + 1)
    setAvg(((good) - (bad)) / (count + 1))
    setGoodPct(good / (count + 1) * 100)

  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setCount(count + 1)
    setAvg(((good) - (bad + 1)) / (count + 1))
    setGoodPct(good / (count + 1) * 100)
  }

  return (
    <div>
      <Header text={'Give Feedback'} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Header text={'Statistics'} />

      <Statistics good={good} neutral={neutral} bad={bad} count={count} avg={avg} goodPct={goodPct} />
    </div>
  )
}

export default App
