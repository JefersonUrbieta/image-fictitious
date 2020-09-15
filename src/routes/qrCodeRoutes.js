import express from 'express'
import qrCodeController from '../controllers/qrCodeController'

const router = express.Router()

router.get('/qr-code', qrCodeController.getQrCode)

export default router
