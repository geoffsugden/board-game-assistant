import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [allScores, setAllScores] = useState([])

  useEffect(() => {
    const setScoresData = async () => {
      const response = await fetch('http://localhost:3001/api/scorecards')
      const scoresData = await response.json()
      setAllScores(scoresData)
    }
    setScoresData()
  }, [])

  console.log(allScores)

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        {allScores.map((scorecard) => (
          <h2>{scorecard.game}</h2>
        ))}
      </div>
    </div>
  )
}

export default App
