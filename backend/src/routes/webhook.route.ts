import { checkWebhookPaymentController } from '@/controllers/webhook.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/payment', checkWebhookPaymentController)

export default router