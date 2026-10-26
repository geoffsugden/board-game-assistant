import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  Stack,
  InputLabel,
} from '@mui/material'
import Scorecard from './components/Scorecard'

const App = () => {
  const [playedGames, setPlayedGames] = useState([])
  const [gamesFilter, setGamesFilter] = useState('All')
  const [playerFilter, setPlayerFilter] = useState('All')

  useEffect(() => {
    const setScoresData = async () => {
      const response = await fetch('http://localhost:3001/api/playedGames')
      const scoresData = await response.json()
      setPlayedGames(scoresData)
    }
    setScoresData()
  }, [])

  const games = ['All', ...new Set(playedGames.map((playedGame) => playedGame.game))]
  const players = [
    'All',
    ...new Set(
      playedGames.flatMap((playedGame) => playedGame.scores).map((scorecard) => scorecard.player),
    ),
  ]

  const gamesToShow = playedGames.filter((game) => {
    const showGame = gamesFilter === 'All' || gamesFilter === game.game
    const showPlayer =
      playerFilter === 'All' || game.scores.some((game) => playerFilter === game.player)

    return showGame && showPlayer
  })

  return (
    <Container>
      <Stack
        direction='row'
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Box>
          <Typography variant='h1'>Board Game Assistant</Typography>
          <Typography variant='body1'>
            Your friendly board game scoring assitant. More features to be added in time.
          </Typography>
        </Box>
        <Stack direction='row' spacing={2}>
          <Box>
            <InputLabel htmlFor='gamesFilter'>Game</InputLabel>
            <Select
              labelId='gamesFilter'
              value={gamesFilter}
              onChange={({ target }) => setGamesFilter(target.value)}>
              {games.map((game) => (
                <MenuItem value={game}>{game}</MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <InputLabel htmlFor='playerFilter'>Player</InputLabel>
            <Select
              labelId='playerFilter'
              value={playerFilter}
              onChange={({ target }) => setPlayerFilter(target.value)}>
              {players.map((player) => (
                <MenuItem value={player}>{player}</MenuItem>
              ))}
            </Select>
          </Box>
        </Stack>
      </Stack>
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
