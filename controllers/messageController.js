import { render } from '@react-email/render'

import {
	EmailToReceiver,
	EmailToSender,
	useSaveMessage,
	useSendMessage,
} from '../emails'
import { connectMongo } from '../utils'

function MessageController() {
	const { sendMessage } = useSendMessage()
	const { saveMessage } = useSaveMessage()

	async function sendAndSaveMessage(req, res) {
		const name = req.body.name || 'Noname'
		const email = req.body.email
		const message = req.body.message || 'No message'
		const date = req.body.date
		const dateString = req.body.dateString || null

		const emailHtmlForReceiver = render(
			<EmailToReceiver
				name={name}
				email={email}
				message={message}
				dateString={dateString}
			/>
		)

		const emailHtmlForSender = render(
			<EmailToSender
				name={name}
				email={email}
				message={message}
				dateString={dateString}
			/>
		)

		const emailOptionsForReceiver = {
			from: process.env.SENDGRID_MAIL,
			to: process.env.SENDGRID_MAIL,
			subject: `New 📧 From ${name}`,
			html: emailHtmlForReceiver,
		}

		const emailOptionsForSender = {
			from: process.env.SENDGRID_MAIL,
			to: email,
			subject: 'Thank you for your 📧',
			html: emailHtmlForSender,
		}

		try {
			await connectMongo()

			saveMessage(res, name, email, message, date, dateString)
			sendMessage(
				res,
				email,
				emailOptionsForReceiver,
				emailOptionsForSender
			)
		} catch (error) {
			console.error(error)
			res.status(400).json({
				message: `4: Connecting to DB client Error: ${error}`,
			})
		}
	}

	return { sendAndSaveMessage: sendAndSaveMessage }
}

export default MessageController
