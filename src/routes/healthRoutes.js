import express from 'express'
import healthController from '../controllers/healthController'

const router = express.Router()

router.get('/health', healthController.gethealth)

export default router
