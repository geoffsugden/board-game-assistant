import express, { Router } from 'express'
import scorecardController from '../controllers/scorecardController.js'

const router = Router()

router.get('/', async (_req, res) => {
  const scorecards = await scorecardController.getAll()
  res.json(scorecards)
})

router.post('/', async (req, res) => {
  const scorecard = await scorecardController.addScoreCard(req.body)
  res.send(scorecard)
})

export default router
