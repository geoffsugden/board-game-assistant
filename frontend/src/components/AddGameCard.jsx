import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Paper, TextField, Typography, Stack, Button } from '@mui/material'

const AddGameCard = ({ thePlayedGames, updatePlayedGames }) => {
  const [game, setGame] = useState('')
  const [date, setDate] = useState(new Date())
  const [scores, setScores] = useState([{ id: crypto.randomUUID(), player: '', score: '' }])

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const gameData = {
      game: game,
      date: new Date(date),
      scores: scores.map(({ id, ...rest }) => rest),
    }
    const response = await fetch('/api/playedGames', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData),
    })

    if (!response.ok) {
      throw new Error("It's borked")
    }
    const result = await response.json()

    updatePlayedGames((currentGames) => [...currentGames, result])
    navigate('/')
  }

  const addPlayer = () => {
    setScores((currentScores) => [
      ...currentScores,
      { id: crypto.randomUUID(), player: '', score: '' },
    ])
  }

  const updateScore = (id, field, value) => {
    setScores((currentScores) =>
      currentScores.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)),
    )
  }

  return (
    <Container sx={{ maxWidth: '650px' }}>
      <Typography variant='h2' sx={{ py: 4, textAlign: 'center' }}>
        Add your latest scores below
      </Typography>
      <Paper elevation={3} component='form' onSubmit={handleSubmit}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <TextField
            id='game'
            label='Game'
            value={game}
            slotProps={{ inputLabel: { shrink: true } }}
            onChange={({ target }) => setGame(target.value)}></TextField>
          <TextField
            id='date'
            label='Date'
            type='date'
            value={date}
            slotProps={{ inputLabel: { shrink: true } }}
            onChange={({ target }) => setDate(target.value)}></TextField>
          {scores.map((entry) => (
            <Stack key={entry.id} direction='row' spacing={1}>
              <TextField
                label='Player'
                value={entry.player}
                onChange={(event) => {
                  updateScore(entry.id, 'player', event.target.value)
                }}
              />
              <TextField
                label='Score'
                value={entry.score}
                onChange={(event) => {
                  updateScore(entry.id, 'score', event.target.value)
                }}
              />
            </Stack>
          ))}
          <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Button type='button' onClick={addPlayer} sx={{ maxWidth: '9rem' }} variant='outlined'>
              Add Player
            </Button>
            <Button type='submit' sx={{ maxWidth: '9rem' }} variant='outlined'>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  )
}
export default AddGameCard
