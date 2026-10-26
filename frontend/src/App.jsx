import { useState, useEffect } from 'react'
import { Container, Typography, Stack, Grid } from '@mui/material'
import Scorecard from './components/Scorecard'

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

  return (
    <Container>
      <Typography variant='h1'>Board Game Assistant</Typography>
      <Typography variant='body1'>
        Your friendly board game scoring assitant. More features to be added in time.
      </Typography>
      <Grid container spacing={2}>
        {allScores
          .toSorted((a, b) => new Date(b.date) - new Date(a.date))
          .map((scorecard) => (
            <Grid key={scorecard.date} size={{ xs: 12, s: 6, md: 4 }}>
              <Scorecard key={scorecard.date} scorecard={scorecard} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default App
