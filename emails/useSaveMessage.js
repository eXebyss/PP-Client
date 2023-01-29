import { Message } from '../models'

export default function useSaveMessage() {
	const saveMessage = async (res, name, email, message, date, dateString) => {
		try {
			const msg = new Message({ name, email, message, date, dateString })
			await msg.save()
		} catch (error) {
			console.error(error)
			res.status(400).json({
				message: `3: Message saving Error: ${error}`,
			})
		}
	}

	return { saveMessage: saveMessage }
}
