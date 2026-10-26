import PlayedGame from '../models/playedGames.js'

export const addPlayedGame = async (playedGame) => {
  const newPlayedGame = new PlayedGame({
    date: playedGame.date ?? new Date(),
    game: playedGame.game,
    scores: playedGame.scores,
  })
  return await newPlayedGame.save()
}

export const getAll = async () => {
  return await PlayedGame.find({})
}
export default {
  addPlayedGame,
  getAll,
}
