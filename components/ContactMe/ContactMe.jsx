import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Input from '../UI/Input'
import Button from '../UI/Button'
import Textarea from '../UI/Textarea'
import emailHandler from '../../utils/handlers/emailHandler'
import blurHandler from '../../utils/handlers/blurHandler'
import handleClickForMessage from '../../utils/handlers/sendMessage'

function ContactMe({ props }) {
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

	const contactFormData = props[0].fields

	const contactMeForm = (
		<>
			<Input
				text={'What is your name?'}
				placeholder={'Your name'}
				type={'text'}
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Input
				text={'What is your e-mail?'}
				placeholder={'Your e-mail'}
				type={'email'}
				value={email}
				onChange={e => emailHandler(e, setEmail, setEmailError)}
				onBlur={e => blurHandler(e, setEmailDirty)}
			/>
			{emailDirty && emailError && (
				<div className='text-error mb-2 md:mb-4'>{emailError}</div>
			)}
			<Textarea
				text={'What is your message?'}
				placeholder={'Your message...'}
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
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
			</Button>
		</>
	)

	const successToast = (
		<div className='toast'>
			<div className='alert alert-success'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='stroke-base-300 flex-shrink-0 h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<span>Your message has been sent!</span>
				</div>
			</div>
		</div>
	)

	const successMessage = (
		<div className='card w-96 bg-base-100 shadow-lg my-2 md:my-4 mx-auto'>
			<div className='card-body'>
				<h2 className='card-title text-center justify-center text-primary'>
					Thank you!
				</h2>
			</div>
		</div>
	)

	return (
		<div className='hero bg-base-200' id='contact'>
			<div className='hero-content text-center'>
				<form className='max-w-md'>
					<h2 className='text-5xl font-bold pt-3 md:pt-6'>
						{contactFormData.contactMeTitle}
					</h2>
					<div className='text-justify py-2 md:py-4'>
						{documentToReactComponents(contactFormData.contactMeFormText)}
					</div>
					{success ? successMessage : contactMeForm}
					{success ? successToast : ''}
				</form>
			</div>
		</div>
	)
}

export default ContactMe
