import { Box, Link, Stack, Typography, Paper } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import GameDetails from './GameDetails'

const formattedDate = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = new Intl.DateTimeFormat('en-NZ', { dateStyle: 'full' }).format(
    new Date(date),
  )
  return formattedDate
}

const GameCard = ({ game }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 1 }}>
      <Typography variant='h3'>{game.game}</Typography>
      <Typography variant='subtitle2'>Played on {formattedDate(game.date)}</Typography>
      <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h4'>
          Winner{' '}
          {game.scores.reduce((max, current) => (current.score > max.score ? current : max)).player}
        </Typography>
        <Link
          component={RouterLink}
          to={`/gamedetails/${game.id}`}
          sx={{ fontSize: '1.2rem', color: '#099900' }}>
          Players {game.scores.length}
        </Link>
      </Stack>
    </Paper>
  )
}
export default GameCard
