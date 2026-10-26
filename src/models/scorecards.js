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

const scorecardSchema = new mongoose.Schema({
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

scorecardSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('scorecard', scorecardSchema)
