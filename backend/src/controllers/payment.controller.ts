import type { NextFunction, Request, Response } from 'express'
import { createPayment } from '@/services/payment.service.js'
import type { CreatePaymentDto, PaymentResponse } from '@shared/types/payment.js'
import crypto from 'crypto'

export const createPaymentController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { userId, paymentMethod, amount } = req.body as CreatePaymentDto

		if(!userId || !paymentMethod || typeof amount !== 'number') {
			return res.status(400).json({ message: 'Missing required fields' })
		}

		const paymentId = `pi_${crypto.randomUUID()}`
		const paymentStatus = 'pending'

		await createPayment({
			userId,
			paymentMethod,
			paymentId,
			paymentStatus,
			amount,
		})
		
		const response: PaymentResponse = { paymentId, paymentStatus }
		res.status(201).json(response)
	} catch (err: unknown) {
		next(err)
	}
}
