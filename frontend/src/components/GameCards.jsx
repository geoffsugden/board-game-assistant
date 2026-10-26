import { Box, Card, CardContent, Stack, Typography, Paper } from '@mui/material'

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
      <Typography variant='h3'>{game.game} - Game results</Typography>
      <Typography variant='subtitle2'>Played on {formattedDate(game.date)}</Typography>

      <Stack spacing={2} sx={{ mt: 2 }}>
        {game.scores.map((score) => (
          <Card key={score.player} variant='outlined'>
            <CardContent>
              <Stack
                direction='row'
                sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box>
                  <Typography variant='h6'>{score.player}</Typography>
                  <Typography color='text.secondary'>position</Typography>
                </Box>
                <Typography variant='h4' fontWeight='bold'>
                  {score.score}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Paper>
  )
}
export default GameCard
