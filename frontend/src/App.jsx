import { useState, useEffect } from 'react'
import { Container, Typography, Grid, Box, Select, MenuItem } from '@mui/material'
import Scorecard from './components/Scorecard'

const App = () => {
  const [playedGames, setPlayedGames] = useState([])
  const [gamesFilter, setGamesFilter] = useState('All')
  // const [playerFilter, setPlayerFilter] = useState('All')

  useEffect(() => {
    const setScoresData = async () => {
      const response = await fetch('http://localhost:3001/api/playedGames')
      const scoresData = await response.json()
      setPlayedGames(scoresData)
    }
    setScoresData()
  }, [])

  const games = ['All', ...new Set(playedGames.map((playedGame) => playedGame.game))]
  const players = ['All', ...new Set(playedGames.flatMap((playedGame) => playedGame.scores.player))]

  console.log(players)

  const gamesToShow =
    gamesFilter === 'All' ? playedGames : playedGames.filter((game) => game.game === gamesFilter)

  return (
    <Container>
      <Typography variant='h1'>Board Game Assistant</Typography>
      <Typography variant='body1'>
        Your friendly board game scoring assitant. More features to be added in time.
      </Typography>
      <Box>
        <Select value={gamesFilter} onChange={({ target }) => setGamesFilter(target.value)}>
          {games.map((game) => (
            <MenuItem value={game}>{game}</MenuItem>
          ))}
        </Select>
      </Box>
      <Grid container spacing={2}>
        {gamesToShow
          .toSorted((a, b) => new Date(b.date) - new Date(a.date))
          .map((playedGame) => (
            <Grid key={playedGame.date} size={{ xs: 12, s: 6, md: 4 }}>
              <Scorecard key={playedGame.date} scorecard={playedGame} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default App
