import { MessageController } from '../../../controllers'

export default async function (req, res) {
	const { sendAndSaveMessage } = MessageController()

	sendAndSaveMessage(req, res)
}
