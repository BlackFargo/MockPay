import type { Request, Response, NextFunction } from 'express'

export const errorMiddleware = (
	err: unknown & { code?: number },
	req: Request,
	res: Response,
	next: NextFunction // eslint-disable-line @typescript-eslint/no-unused-vars
) => {
	let message = 'Internal Server Error'
	let status = 500

	if (err instanceof Error) {
		message = err.message

		if (err.name === 'ValidationError') status = 400
		if (err.code === 11000) status = 409
	} else {
		message = 'Unknown error occurred'
	}

	// @eslint-disable-next-line no-console
	console.error(err) // logging for debug
	res.status(status).json({ message })
}
