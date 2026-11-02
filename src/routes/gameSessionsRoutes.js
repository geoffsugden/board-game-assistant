import express, { Router } from 'express'
import gameSessionsController from '../controllers/gameSessionsController.js'

const router = Router()

router.get('/', async (_req, res) => {
  const gameSessions = await gameSessionsController.getAll()
  res.json(gameSessions)
})

router.get('/:id', async (req, res) => {
  const gameSession = await gameSessionsController.getOne(req.params.id)
  if (gameSession) {
    res.json(gameSession)
  } else {
    res.status(404).end()
  }
})

router.post('/', async (req, res) => {
  console.log('Received request to add game session:', req.body)
  const gameSession = req.body
  const savedGameSession = await gameSessionsController.addGameSession(gameSession)
  res.status(201).json(savedGameSession)
})

export default router
