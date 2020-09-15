import express from 'express'
import imageController from '../controllers/imageController'

const router = express.Router()

router.get('/image/:size/:background/:foreground', imageController.getImage)
router.get('/image/:size/:background', imageController.getImage)
router.get('/image/:size', imageController.getImage)

export default router
