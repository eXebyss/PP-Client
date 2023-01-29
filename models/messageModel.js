import { Schema, model, models } from 'mongoose'

const messageSchema = new Schema({
	name: { type: String },
	email: { type: String, required: true },
	message: { type: String },
	date: { type: Date, default: Date.now() },
	dateString: { type: String },
})

const Message = models.Message || model('Message', messageSchema)

export default Message
