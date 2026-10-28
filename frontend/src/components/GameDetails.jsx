import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const GameDetails = ({ games }) => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getGame = async () => {
      try {
        const response = await fetch(`/api/playedGames/${id}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch game details: ${response.status}`)
        }

        const gameData = await response.json()
        setGame(gameData)
      } catch (error) {
        setError(error.message)
      }
    }
    getGame()
  }, [id])

  if (error) {
    return <Typography color='error'>{error}</Typography>
  }
  if (!game) {
    return <Typography>Loading game details...</Typography>
  }

  // const game = games.find((game) => game.id === id)
  const formattedDate = (dateString) => {
    const date = new Date(dateString)
    const formattedDate = new Intl.DateTimeFormat('en-NZ', { dateStyle: 'full' }).format(
      new Date(date),
    )
    return formattedDate
  }

  return (
    <Container maxWidth={false} sx={{ maxWidth: '650px', width: '100%', mx: 'auto' }}>
      <Typography variant='h2' sx={{ pt: 5 }}>
        {game.game}
      </Typography>
      <Typography variant='subtitle2'>Played on {formattedDate(game.date)}</Typography>
      <Stack spacing={2} sx={{ mt: 2 }}>
        {game.scores
          .toSorted((a, b) => b.score - a.score)
          .map((score) => (
            <Card key={score.player} variant='outlined'>
              <CardContent>
                <Stack
                  direction='row'
                  sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Box>
                    <Typography variant='h6'>{score.player}</Typography>
                    {/* <Typography color='text.secondary'>position</Typography> */}
                  </Box>
                  <Typography variant='h4' fontWeight='bold'>
                    {score.score}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
      </Stack>
    </Container>
  )
}
export default GameDetails
