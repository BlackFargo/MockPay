export interface CreatePaymentDto {
	userId: string
	paymentMethod: string
	amount: number
}

export interface PaymentResponse {
	paymentId: string
	paymentStatus: string
}
