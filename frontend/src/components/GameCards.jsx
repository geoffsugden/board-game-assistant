import { useState } from 'react'
import { Box, Grid, InputLabel, MenuItem, Stack, Select, Typography } from '@mui/material'
import GameCard from './GameCard'

const GameCards = ({ playedGames = [] }) => {
  const [gamesFilter, setGamesFilter] = useState('All')
  const [playerFilter, setPlayerFilter] = useState('All')

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
    <Box>
      <Stack direction='row' sx={{ alignContent: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h2' sx={{ pt: 4 }}>
          Game Results
        </Typography>
        <Stack direction='row' spacing={2} sx={{ pb: 4 }}>
          <Box>
            <InputLabel htmlFor='gamesFilter'>Game</InputLabel>
            <Select
              labelId='gamesFilter'
              sx={{ minWidth: '8rem' }}
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
              sx={{ minWidth: '8rem' }}
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
              <GameCard key={playedGame.date} game={playedGame} />
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}
export default GameCards
