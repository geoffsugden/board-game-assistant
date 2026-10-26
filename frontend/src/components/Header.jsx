import { Box, Stack, Typography, InputLabel, Select, MenuItem } from '@mui/material'
const Header = ({ setGamesFilter, setPlayerFilter, gamesFilter, playerFilter, games, players }) => {
  return (
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
  )
}
export default Header
