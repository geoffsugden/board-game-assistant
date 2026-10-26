import { Grid } from '@mui/material'
import GameCard from './GameCard'

const GameCards = ({ games }) => {
  return (
    <Grid container spacing={2}>
      {games
        .toSorted((a, b) => new Date(b.date) - new Date(a.date))
        .map((playedGame) => (
          <Grid key={playedGame.date} size={{ xs: 12, s: 6, md: 4 }}>
            <GameCard key={playedGame.date} game={playedGame} />
          </Grid>
        ))}
    </Grid>
  )
}
export default GameCards
