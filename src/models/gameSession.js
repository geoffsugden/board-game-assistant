import mongoose from 'mongoose'

const playerResultsSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  playerResult: {
    type: Number,
    required: true,
  },
})

const gameSessionSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  date: {
    type: Date,
    required: true,
  },
  playerResults: [playerResultsSchema],
})

const transformId = (returnedObject) => {
  if (returnedObject._id) {
    returnedObject.id = returnedObject._id.toString()
  }

  delete returnedObject._id
  delete returnedObject.__v

  return returnedObject
}

gameSessionSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    transformId(returnedObject)

    returnedObject.playerResults?.forEach((playerResult) => transformId(playerResult))
    return returnedObject
  },
})

export default mongoose.model('GameSession', gameSessionSchema)
