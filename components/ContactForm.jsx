import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import Input from './input/Input'
import Button from './button/Button'
import Textarea from './textarea/Textarea'
import emailHandler from '../utils/handlers/emailHandler'
import blurHandler from '../utils/handlers/blurHandler'
import handleClickForMessage from '../utils/handlers/sendMessage'

function ContactForm() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [emailError, setEmailError] = useState('Email address is required')
	const [emailDirty, setEmailDirty] = useState(false)
	const [formValid, setFormValid] = useState(false)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if (emailError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError])

	return (
		<div className='contact-form' id='contact-me'>
			<div className='wrapper'>
				<div
					className='inner'
					style={
						success ? { marginTop: '1.5rem', marginBottom: '1.5rem' } : {}
					}>
					<form action=''>
						{success ? (
							<div className='success'>
								<h3>Thank you!</h3>
								<Alert severity='success' className='successMessage'>
									Your message has been sent!
								</Alert>
							</div>
						) : (
							<div>
								<h3>Contact Me</h3>
								<p>
									If you have any suggestions or ideas, feel free to contact me.
									I will try to respond as quickly as possible.
								</p>
								<label className='form-group'>
									<Input
										type='text'
										className='form-control'
										required
										value={name}
										onChange={e => setName(e.target.value)}
									/>
									<span>Your Name</span>
									<span className='border'></span>
								</label>
								{emailDirty && emailError && (
									<div style={{ color: 'red', marginBottom: '1rem' }}>
										{emailError}
									</div>
								)}
								<label className='form-group'>
									<Input
										type='email'
										name='email'
										className='form-control'
										required
										value={email}
										onChange={e => emailHandler(e, setEmail, setEmailError)}
										onBlur={e => blurHandler(e, setEmailDirty)}
									/>
									<span>Your Mail</span>
									<span className='border'></span>
								</label>
								<label className='form-group'>
									<Textarea
										className='form-control'
										required
										value={message}
										onChange={e => setMessage(e.target.value)}></Textarea>
									<span>Your Message</span>
									<span className='border'></span>
								</label>
								<Button
									disabled={!formValid}
									onClick={e =>
										handleClickForMessage(
											e,
											name,
											setName,
											email,
											setEmail,
											message,
											setMessage,
											setSuccess
										)
									}>
									Submit
									<i className='fa-solid fa-arrow-right'></i>
								</Button>
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
