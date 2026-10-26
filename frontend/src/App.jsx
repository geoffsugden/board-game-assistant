import { useState, useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import GameCard from './components/GameCards'
import Header from './components/Header'

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
      <Header
        setGamesFilter={setGamesFilter}
        setPlayerFilter={setPlayerFilter}
        gamesFilter={gamesFilter}
        playerFilter={playerFilter}
        games={games}
        players={players}
      />
      <Grid container spacing={2}>
        {gamesToShow
          .toSorted((a, b) => new Date(b.date) - new Date(a.date))
          .map((playedGame) => (
            <Grid key={playedGame.date} size={{ xs: 12, s: 6, md: 4 }}>
              <GameCard key={playedGame.date} game={playedGame} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default App
