import express from 'express'
import path from 'path'
import cors from 'cors'
import healthRoutes from './routes/healthRoutes'
import imageRoutes from './routes/imageRoutes'
import qrCodeRoutes from './routes/qrCodeRoutes'

const app = express()

// middlewares
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// setup public folder
app.use(express.static('./public'))

// routes
app.use(healthRoutes)
app.use(imageRoutes)
app.use(qrCodeRoutes)

export default app
