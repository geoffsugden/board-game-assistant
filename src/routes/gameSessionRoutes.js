import express, { Router } from 'express'
import gameSessionController from '../controllers/gameSessionController.js'


const router = Router()

router.get('/', async (_req, res) => {
  const gameSessions = await gameSessionController.getAll()
  res.json(gameSessions)
})

router.get('/:id', async (req, res) => {
  const gameSession = await gameSessionController.getOne(req.params.id)   
  if (gameSession) {
    res.json(gameSession)
  } else {
    res.status(404).end()
  }   
})

router.post('/', async (req, res) => {
  console.log('Received request to add game session:', req.body)
  const gameSession = req.body
  const savedGameSession = await gameSessionController.addGameSession(gameSession)
  res.status(201).json(savedGameSession)
})

export default router