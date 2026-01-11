import { model, Schema, type Document } from 'mongoose'

export interface IPaymentData {
	userId: string
	paymentMethod: string
	paymentId: string
	paymentStatus: string
	amount: number
}

export interface IPayment extends Document, IPaymentData {}

const paymentSchema = new Schema({
		userId: { type: String, required: true },
		paymentMethod: { type: String, required: true },
		paymentId: { type: String, required: true },
		paymentStatus: { type: String, required: true },
		amount: { type: Number, required: true },
})

export const PaymentModel = model<IPayment>('payments', paymentSchema)