import { PaymentModel } from '@/models/payment.model.js'
import { MockCardModel } from '@/models/mockCard.js'
import type { WebhookPaymentDto } from '@shared/types/webhook.js'

export const updatePaymentStatus = async ({
	cardNumber,
	expiryDate,
	cvv,
	paymentId,
}: WebhookPaymentDto) => {
	const doc = await MockCardModel.findOne({ cardNumber: cardNumber })

	if (!doc) {
		return false
	}

	if (expiryDate !== doc.expiryDate || cvv !== doc.cvv) {
		return false
	}

	return await PaymentModel.findOneAndUpdate(
		{ paymentId: paymentId },
		{ paymentStatus: 'success' },
		{ new: true },
	)
}
