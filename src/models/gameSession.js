import mongoose from 'mongoose';

const playerResultsSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
    minlength: 1,
  },
  playerResult: {
    type: Number,
    required: true,
  },

});

const gameSessionSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
    minlength: 1,
  },
  date: {
    type: Date,
    required: true,
  },
  playerResults: [playerResultsSchema],

});  

gameSessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
}); 
export default mongoose.model('GameSession', gameSessionSchema);