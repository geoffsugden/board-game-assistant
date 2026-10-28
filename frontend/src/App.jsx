import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button, Container, Stack } from '@mui/material'
import GameCards from './components/GameCards'
import Header from './components/Header'
import AddGameCard from './components/AddGameCard'
import GameDetails from './components/GameDetails'

const App = () => {
  const [playedGames, setPlayedGames] = useState([])

  useEffect(() => {
    const setScoresData = async () => {
      const response = await fetch('/api/playedGames')
      const scoresData = await response.json()
      setPlayedGames(scoresData)
    }
    setScoresData()
  }, [])

  return (
    <Container>
      <Header />
      <Router>
        <Stack direction='row' spacing={0.5}>
          <Button component={Link} to='/' variant='contained'>
            Home
          </Button>
          <Button component={Link} to='/addgamecard' variant='contained'>
            Add Scores
          </Button>
        </Stack>
        <Routes>
          <Route
            path='/addgamecard'
            element={
              <AddGameCard thePlayedGames={playedGames} updatePlayedGames={setPlayedGames} />
            }
          />
          <Route path='/gamedetails/:id' element={<GameDetails games={playedGames} />} />
          <Route path='/' element={<GameCards playedGames={playedGames} />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
