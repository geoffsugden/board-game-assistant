import express, { Router } from 'express'
import playedGameController from '../controllers/playedGamesController.js'

const router = Router()

router.get('/', async (_req, res) => {
  const playedGames = await playedGameController.getAll()
  res.json(playedGames)
})

router.get('/:id', async (req, res) => {
  const playedGames = await playedGameController.getOne(req.params.id)
  res.json(playedGames)
})

router.post('/', async (req, res) => {
  const playedGame = await playedGameController.addPlayedGame(req.body)
  res.send(playedGame)
})


