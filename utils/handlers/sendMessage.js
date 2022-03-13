import axios from 'axios'
import { API_URL } from '../../config/config'

const sendMessage = async (e, name, email, message) => {
	e.preventDefault()
	const date = new Date(Date.now())
	try {
		await axios.post(`${API_URL}`, {
			name: name,
			email: email,
			message: message,
			date: date,
			dateString: date.toLocaleString('lv-LV', {
				hour12: false,
			}),
		})
	} catch (err) {
		console.log(`${err.response.data.message}.`, 'Error 1: post')
	}
}

const handleClickForMessage = async (
	e,
	name,
	setName,
	email,
	setEmail,
	message,
	setMessage,
	setSuccess
) => {
	sendMessage(e, name, email, message)
	setName('')
	setEmail('')
	setMessage('')
	setSuccess(true)
}

export default handleClickForMessage
