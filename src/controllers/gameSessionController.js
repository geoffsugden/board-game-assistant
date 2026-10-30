import GameSession from '../models/GameSession.js';

const addGameSession = async (gameSession) => { 
  const newGameSession = new GameSession(gameSession);
  return await newGameSession.save();
};

const getAll = async () => {
  return await GameSession.find({});
}

const getOne = async (id) => {
  return await GameSession.findById(id);
}   

export default { addGameSession, getOne, getAll };