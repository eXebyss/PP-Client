import axios from 'axios'
import { useEffect, useState } from 'react'

import useValidation from '../../hooks/useValidation'

function useContactMe() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [emailErrorMessage, setEmailErrorMessage] = useState(
		'Email address is required'
	)
	const [formValid, setFormValid] = useState(false)
	const [messageSendSuccess, setMessageSendSuccess] = useState(false)
	const [messageSendError, setMessageSendError] = useState('')
	const { emailValidation } = useValidation()

	const emailCheckPass = emailValidation(email)

	useEffect(() => {
		emailCheckPass
			? setEmailErrorMessage('')
			: setEmailErrorMessage('Please provide a valid e-mail address')
	}, [emailCheckPass])

	useEffect(() => {
		if (emailErrorMessage) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailErrorMessage])

	useEffect(() => {
		;(messageSendSuccess || messageSendError) && setIsLoading(false)
	}, [messageSendSuccess, messageSendError])

	const blurHandler = (event) => {
		switch (event) {
			case 'email': {
				setEmailDirty(true)
				break
			}
			default:
				setEmailDirty(true)
				break
		}
	}

	const sendMessage = async (event) => {
		event.preventDefault()
		const date = new Date(Date.now())
		try {
			await axios.post(process.env.NEXT_PUBLIC_REST_API_URL, {
				name: name,
				email: email,
				message: message,
				date: date,
				dateString: date.toLocaleString('lv-LV', {
					hour12: false,
				}),
			})
			setMessageSendSuccess(true)
		} catch (error) {
			setMessageSendError(error.message)
		}
	}

	const handleSendMessage = async (event) => {
		sendMessage(event)
		setName('')
		setEmail('')
		setMessage('')
		setIsLoading(true)
	}

	return {
		name: name,
		setName: setName,
		email: email,
		setEmail: setEmail,
		message: message,
		setMessage: setMessage,
		emailDirty: emailDirty,
		isLoading: isLoading,
		emailErrorMessage: emailErrorMessage,
		formValid: formValid,
		messageSendSuccess: messageSendSuccess,
		messageSendError: messageSendError,
		blurHandler: blurHandler,
		handleSendMessage: handleSendMessage,
	}
}

export default useContactMe
