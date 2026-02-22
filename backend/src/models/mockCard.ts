import { model, Schema } from 'mongoose'

export interface IMockCard {
	cardNumber: string
	expiryDate: string
	cvv: string
}

const mockCardSchema = new Schema({
	cardNumber: { type: String, required: true },
	expiryDate: { type: String, required: true },
	cvv: { type: String, required: true },
})

export const MockCardModel = model<IMockCard>('mockCards', mockCardSchema)
