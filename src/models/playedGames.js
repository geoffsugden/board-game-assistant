import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
  _id: false,
  player: {
    type: String,
    minlength: 1,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
})

const playedGame = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  game: {
    type: String,
    required: true,
    minlength: 1,
  },
  scores: [scoreSchema],
})

playedGame.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('playedGame', playedGame)
