import PlayedGame from '../models/playedGames.js'

const addPlayedGame = async (playedGame) => {
  const newPlayedGame = new PlayedGame({
    date: playedGame.date ?? new Date(),
    game: playedGame.game,
    scores: playedGame.scores,
  })
  return await newPlayedGame.save()
}

const getAll = async () => {
  return await PlayedGame.find({})
}

const getOne = async (id) => {
  return await PlayedGame.findById(id)
}
export default {
  addPlayedGame,
  getOne,
  getAll,
}
