import type { NextFunction, Request, Response } from 'express'
import { updatePaymentStatus } from '@/services/webhook.service.js'

export const checkWebhookPaymentController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { cardNumber, expiryDate, cvv, paymentId } = req.body

		if (!cardNumber || !expiryDate || !cvv || !paymentId) {
			return res.status(400).json({ status: 'error', message: 'Missing required fields' })
		}

		const result = await updatePaymentStatus({ cardNumber, expiryDate, cvv, paymentId })
		if (result) {
			res.status(200).json({ status: 'success', message: 'Payment status updated' })
		} else {
			res.status(400).json({ status: 'error', message: 'Invalid payment details' })
		}
	} catch (err) {
		next(err)
	}
}