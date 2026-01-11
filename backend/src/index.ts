import express from 'express'
import dotenv from 'dotenv'
import paymentRoutes from '@/routes/payment.route.js'
import mongoose from 'mongoose'
import { errorMiddleware } from '@/middlewares/error.middleware.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/payments', paymentRoutes)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000


const collectionOwner = process.env.MONGO_DB_USERNAME || ''
const password = process.env.MONGO_DB_PASSWORD || ''
const collectionName = 'payments'
const mongoURI = `mongodb+srv://${collectionOwner}:${password}@cluster0.nqhtzcp.mongodb.net/${collectionName}?appName=Cluster0&retryWrites=true&w=majority`

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

async function main() {
	try {
		await mongoose.connect(mongoURI)
		app.listen(PORT, () => {
			console.log(`Server is running at http://localhost:${PORT}`)
		})
	} catch (err) {
		console.error('Failed to connect to MongoDB', err)
	}
}

main()