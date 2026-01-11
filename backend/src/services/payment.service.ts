import { PaymentModel } from '@/models/payment.model.js'
import type { IPaymentData } from '@/models/payment.model.js'

export const createPayment = async ({
	userId,
	paymentMethod,
	paymentId,
	paymentStatus,
	amount,
}: IPaymentData) => {
		 await PaymentModel.create({
			userId,
			paymentMethod,
			paymentId,
			paymentStatus,
			amount,
		})
}
