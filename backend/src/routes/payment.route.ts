import { Router } from 'express'
import { createPaymentController } from '@/controllers/payment.controller.js'

const router = Router()

router.post('/create', createPaymentController)
export default router