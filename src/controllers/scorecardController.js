import Scorecard from '../models/scorecards.js'

export const addScoreCard = async (scorecard) => {
  const newScorecard = new Scorecard({
    date: scorecard.date ?? new Date(),
    game: scorecard.game,
    scores: scorecard.scores,
  })
  return await newScorecard.save()
}

export const getAll = async () => {
  return await Scorecard.find({})
}
export default {
  addScoreCard,
  getAll,
}
