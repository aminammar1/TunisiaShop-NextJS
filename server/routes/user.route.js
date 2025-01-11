import express from 'express'
import { signin, signup } from '../controllers/user.controller.js'
import { verifyEmail } from '../controllers/user.controller.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/verify-email', verifyEmail)
router.post('/signin', signin)

export default router